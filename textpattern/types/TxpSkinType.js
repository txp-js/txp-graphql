var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var TxpSkinType = new GraphQLObjectType({
    name: 'TxpSkin',
    description: '@TODO DESCRIBE ME',

    fields: function getTxpSkinFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            title: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            version: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            description: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            author: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authorUri: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastmod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(TxpSkinType);
module.exports = TxpSkinType;