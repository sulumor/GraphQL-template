import "dotenv/config.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./app/graphQL/schemas/schemas.loader.js";
import resolvers from "./app/graphQL/resolvers/index.resolver.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 4000;

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`🚀  Server ready at: ${url}`);
