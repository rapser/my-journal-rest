module.exports = {

    tableName: 'posts',

    attributes : {
        title: {
            type: 'string',
            required: true
        },
        postBody:{
            type: 'string',
            required: true
        }
    }
}