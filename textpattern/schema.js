'use strict';
var getEntityResolver = require('./util/entity-resolver');
var GraphQL = require('graphql');
var TxpCategoryType = require('./types/TxpCategoryType');
var TextpatternType = require('./types/TextpatternType');
var TxpCssType = require('./types/TxpCssType');
var TxpDiscussType = require('./types/TxpDiscussType');
var TxpDiscussNonceType = require('./types/TxpDiscussNonceType');
var TxpFileType = require('./types/TxpFileType');
var TxpFormType = require('./types/TxpFormType');
var TxpImageType = require('./types/TxpImageType');
var TxpLangType = require('./types/TxpLangType');
var TxpLinkType = require('./types/TxpLinkType');
var TxpLogType = require('./types/TxpLogType');
var TxpPageType = require('./types/TxpPageType');
var TxpPluginType = require('./types/TxpPluginType');
var TxpPrefType = require('./types/TxpPrefType');
var TxpSectionType = require('./types/TxpSectionType');
var TxpSkinType = require('./types/TxpSkinType');
var TxpTokenType = require('./types/TxpTokenType');
var TxpUserType = require('./types/TxpUserType');
var resolveMap = require('./resolve-map');
var types = require('./types');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLSchema = GraphQL.GraphQLSchema;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLString = GraphQL.GraphQLString;
var registerType = resolveMap.registerType;

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',

        fields: function getRootQueryFields() {
            return {
                txpCategory: {
                    type: TxpCategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('TxpCategory')
                },

                textpattern: {
                    type: TextpatternType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Textpattern')
                },

                txpCss: {
                    type: TxpCssType,
                    args: {},
                    resolve: getEntityResolver('TxpCss')
                },

                txpDiscuss: {
                    type: TxpDiscussType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('TxpDiscuss')
                },

                txpDiscussNonce: {
                    type: TxpDiscussNonceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('TxpDiscussNonce')
                },

                txpFile: {
                    type: TxpFileType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('TxpFile')
                },

                txpForm: {
                    type: TxpFormType,
                    args: {},
                    resolve: getEntityResolver('TxpForm')
                },

                txpImage: {
                    type: TxpImageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('TxpImage')
                },

                txpLang: {
                    type: TxpLangType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('TxpLang')
                },

                txpLink: {
                    type: TxpLinkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('TxpLink')
                },

                txpLog: {
                    type: TxpLogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('TxpLog')
                },

                txpPage: {
                    type: TxpPageType,
                    args: {},
                    resolve: getEntityResolver('TxpPage')
                },

                txpPlugin: {
                    type: TxpPluginType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('TxpPlugin')
                },

                txpPref: {
                    type: TxpPrefType,
                    args: {},
                    resolve: getEntityResolver('TxpPref')
                },

                txpSection: {
                    type: TxpSectionType,
                    args: {},
                    resolve: getEntityResolver('TxpSection')
                },

                txpSkin: {
                    type: TxpSkinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('TxpSkin')
                },

                txpToken: {
                    type: TxpTokenType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('TxpToken')
                },

                txpUser: {
                    type: TxpUserType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('TxpUser')
                }
            };
        }
    })
});

module.exports = schema;