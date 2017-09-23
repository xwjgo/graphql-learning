const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = graphql;

const items = {id: '1', title: '苹果', price: '20000', pic: 'apple.png'};
/**
 * 商品数据模型
 */
const ItemType = new GraphQLObjectType({
    name: 'item',
    description: '商品item',
    fields: {
        id: {
            type: GraphQLString,
            description: '商品id'
        },
        title: {
            type: GraphQLString,
            description: '商品名称'
        },
        price: {
            type: GraphQLString,
            description: '商品价格',
            resolve: function (root, param, context) {
                return (root.price/100).toFixed(2)
            }
        },
        pic: {
            type: GraphQLString,
            description: '商品图片'
        }
    }
});

const ItemSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'ItemQuery',
        description: '商品查询',
        fields: {
            item: {
                type: ItemType,
                description: '商品item',
                args: {
                    id: {
                        type: GraphQLInt,
                        require: true
                    }
                },
                resolve: function (root, obj, ctx) {
                    console.log('root:', root);
                    console.log('obj:', obj);
                    console.log('ctx:', ctx);
                    return items;
                }
            }
        }
    })
});

module.exports = ItemSchema;