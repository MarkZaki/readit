const dotenv = require("dotenv");

dotenv.config();

const { NEO4J_USER, NEO4J_PASSWORD, NEO4J_URI, PORT } = process.env;

module.exports = { NEO4J_USER, NEO4J_PASSWORD, NEO4J_URI, PORT };
