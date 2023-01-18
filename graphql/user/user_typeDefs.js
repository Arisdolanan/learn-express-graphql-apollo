const typeDefs = `#graphql
    # var
    type User {
        id: ID!
        name: String!
        email: String!
        phone: String!
    }

    input UserInput {
        name: String!
        email: String!
        phone: String!       
    }

    # get mutation -> resolver
    type Query {
        hello: String
        getAllUser: [User]
        getUser(id: ID): User
    }

    # set mutation -> resolver
    type Mutation {
        create(user: UserInput!): User
        delete(id: ID!): String
        update(id: ID!, user: UserInput): User
    }
  `;

module.exports = typeDefs;
