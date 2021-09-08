const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Book {
		title: String!
		year: Int
		ISBN: String
		publisher: Publisher @relationship(type: "PUBLISHED", direction: IN)
		author: Person @relationship(type: "WROTE", direction: IN)
		translator: Person @relationship(type: "TRANSLATED", direction: IN)
	}

	type Person {
		name: String!
		birthYear: Int
		writtenBooks: [Book] @relationship(type: "WROTE", direction: OUT)
		translatedBooks: [Book] @relationship(type: "TRANSLATED", direction: OUT)
	}

	type Publisher {
		name: String!
		fromYear: Int
		books: [Book] @relationship(type: "PUBLISHED", direction: OUT)
	}
`;

module.exports = typeDefs;
