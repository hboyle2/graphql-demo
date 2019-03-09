const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
type Query {
  Wizards: String!
}
`;

// 2
const resolvers = {
  Query: {
    Wizards: () => {
      return "Wizard List!";
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
