// relay.config.js
module.exports = {
    // ...
    // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
    src: "./src",
    language: "typescript",
    schema: "./schema.graphql",
    schemaExtensions: ["./schema-extension.graphql"],
    excludes: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  }