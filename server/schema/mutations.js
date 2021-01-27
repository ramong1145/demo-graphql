const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;
const AuthService = require('../services/auth');

const UserType = require('./types/user_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation', 
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentVaule, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    }
  }
});

module.exports = mutation;