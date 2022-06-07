import { GraphQLObjectType, GraphQLString } from "graphql";

const Person = new GraphQLObjectType({
  name: "Person",
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
  }),
});

export default Person;