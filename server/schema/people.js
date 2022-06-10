import graphql, { GraphQLInt } from "graphql";
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import fetch from "node-fetch";
const url = "https://swapi.dev/api/people/";
const filmsUrl = "https://swapi.dev/api/films/";
const planetsUrl = "https://swapi.dev/api/planets/";
const PeopleType = new GraphQLObjectType({
  name: "People",
  description: "This  represents people",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    height: {
      type: GraphQLString,
    },
    mass: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
    homeworld: {
      type: GraphQLString,
    },

    url: {
      type: GraphQLString,
    },
    page: {
      type: GraphQLString,
    },
    count: {
      type: GraphQLInt,
    },
    hair_color: {
      type: GraphQLString,
    },
    skin_color: {
      type: GraphQLString,
    },
    eye_color: {
      type: GraphQLString,
    },
    birth_year: {
      type: GraphQLString,
    },
    //films array
    films: {
      //an array of films
      type: new GraphQLList(FilmType),
      async resolve(parent, args) {
        let ids = parent.films.map((film) => {
          return film.split("/")[5];
        });

        let films = await Promise.all(
          ids.map(async (id) => {
            let response = await fetch(`${filmsUrl}${id}`);
            let data = await response.json();
            return data;
          })
        );
        return films;
      },
    },

    planet: {
      type: GraphQLString,
      async resolve(parent, args) {
        const id = parent.homeworld.split("/")[5];

        const res = await fetch(planetsUrl + id);
        const data = await res.json();
     
        return data.name;
      },
    },
  }),
});

const FilmType = new GraphQLObjectType({
  name: "Film",
  description: "This  represents films",
  fields: () => ({
    title: {
      type: GraphQLString,
    },
    release_date: {
      type: GraphQLString,
    },
    //director 
    director: {
      type: GraphQLString,
    },
    //producer
    producer: {
      type: GraphQLString,
    },
    //openin craw
    opening_crawl: {
      type: GraphQLString,
    }

    
   
  }),
});

const PlanetType = new GraphQLObjectType({
  name: "Planets",
  description: "This  represents planets",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    person: {
      type: PeopleType,
      args: { name: { type: GraphQLString } },
      async resolve(parent, args) {
 
        const res = await fetch(`${url}?search=${args.name}`);
        const data = await res.json();
        return data.results[0];
      },
    },
    people: {
      type: new GraphQLList(PeopleType),
      args: {
        page: { type: GraphQLInt },
      },

      async resolve(parent, args) {
    
        const res = await fetch(`${url}?page= ${args.page ? args.page : 1}`);
        const data = await res.json();
     
        return data.results;
      },
    },

    films: {
      type: new GraphQLList(FilmType),
      args: {
        url: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const id = args.url.split("/")[5];
       
        const res = await fetch(`${filmsUrl}${id}`);
      
        const data = await res.json();
       
        return data;
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
