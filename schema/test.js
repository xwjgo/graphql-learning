const graphql = require('graphql');

let count = 1;

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'RootQueryType',
        description: '测试查询',
        fields: {
            count: {
                type: graphql.GraphQLInt,
                description: '苹果的数量',
                resolve: function () {
                    return count;
                }
            },
            title: {
                type: graphql.GraphQLString,
                description: '货物名称',
                resolve: function () {
                    return 'apple-苹果';
                }
            },
            price: {
                type: graphql.GraphQLFloat,
                description: '单价',
                resolve: function () {
                    return 99.9;
                }
            }
        }
    }),
    mutation: new graphql.GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            updateCount: {
                type: graphql.GraphQLInt,
                description: '更新苹果的数量',
                resolve: function () {
                    count += 1;
                    return count;
                }
            }
        }
    })
});

module.exports = schema;