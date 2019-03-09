const { GraphQLServer } = require("graphql-yoga");
const WizardList = require("./WizardList");

let list = WizardList.WizardList;

const typeDefs = `
  type Query {
    Wizards:[Characters!]
  }

  type Characters {
   id: String
   name: String
   house : String
   wand : Wand
   ancestry: String
   image: String
   species: String
  }

  type Wand {
    wood: String
    core: String
    length: Int
  }


`;

// 2
const resolvers = {
  Query: {
    Wizards: () => {
      return list;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
