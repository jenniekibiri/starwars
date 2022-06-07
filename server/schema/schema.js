import graphql from "graphql";
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,

} from "graphql";
import fetch from "node-fetch";
const url = "https://swapi.dev/api/people/";
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
    gender:{
      type: GraphQLString,
    },
    homeworld:{
      type: GraphQLString,
    }
  }),
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    person: {
      type: PeopleType,
      args: { name: { type: GraphQLString } },
     async resolve(parent, args) {
        console.log(args);
        const res = await fetch(`${url}?search=${args.name}`);
        const data = await res.json();
        return data.results[0];
      },
    },
    people: {
      type: new GraphQLList(PeopleType),
      async resolve() {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        return data.results;
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
