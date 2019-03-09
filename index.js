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
  type Mutation {
    createWizard(name: String,  image: String ): Characters!
    updateWizard(id: Int, name: String, image: String): Characters!
  }



`;

let idCount = list.length + 1;
const resolvers = {
  Query: {
    Wizards: () => {
      return list;
    }
  },
  Mutation: {
    createWizard: (parent, args) => {
      const link = {
        id: idCount++,
        name: args.name,
        image: args.image
      };
      list.push(link);
      return link;
    },
    updateWizard: (parent, args) => {
      list.map(character => {
        if (character.id == args.id) {
          character.name = args.name;
          character.image = args.image;
        }
      });
      return args;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
