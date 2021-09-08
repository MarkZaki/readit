const http = require("http");
const { PORT } = require("./config/enviroment");
const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer } = require("apollo-server-express");
const {
	ApolloServerPluginLandingPageGraphQLPlayground
} = require("apollo-server-core");
const express = require("express");
const Neo4jGraphQLSchema = require("./schemas/neo4jGraphQlSchema");
const databseDriver = require("./config/databseDriver");

const main = async () => {
	const app = express();
	const httpServer = http.createServer(app);

	app.get("/", (req, res) => res.send("Hello!"));

	const neoSchema = new Neo4jGraphQL({
		typeDefs: Neo4jGraphQLSchema,
		driver: databseDriver,
		plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
	});

	const server = new ApolloServer({ schema: neoSchema.schema });

	await server.start();
	server.applyMiddleware({ app });

	await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
	console.log(
		`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
	);
};

main();
