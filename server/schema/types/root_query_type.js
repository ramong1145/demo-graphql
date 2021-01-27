const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: graphql.GraphQLID }
  }
});

module.exports = RootQueryType;
