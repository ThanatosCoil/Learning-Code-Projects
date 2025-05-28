//structure of your data

const { gql } = require("graphql-tag");

//Тип ID это уникальный ключ. ! - это значит что не нулевое значение
//Quey это по сути контроллеры, products - получаем все продукты, product - получаем продукт по ID. Но тут мы только описываем типы, их логика находится в resolvers

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
    inStock: Boolean!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product
    deleteProduct(id: ID!): Boolean
    updateProduct(
      id: ID!
      title: String
      category: String
      price: Float
      inStock: Boolean
    ): Product
  }
`;

module.exports = typeDefs;
