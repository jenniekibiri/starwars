import graphql, { GraphQLInt } from "graphql";
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import fetch from "node-fetch";
const url = "https://swapi.dev/api/planets/";
const Planentype = new GraphQLObjectType({
  name: "Planets",
  description: "This  represents planets",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
  }),
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    planets: {
      type: Planentype,
      args: { id: { type: GraphQLString } },
      async resolve(parent, args) {
        const res = await fetch(`${url}?search=${args.name}`);
        const data = await res.json();
        return data.results[0];
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
