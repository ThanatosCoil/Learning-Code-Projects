require("dotenv").config();
require("express-async-errors");

const connectDB = require("../db/connect");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

async function startServer() {
  await connectDB(process.env.MONGO_URI);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });

  console.log(`Server ready at: ${url}`);
}

startServer();
