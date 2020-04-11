module.exports = {

    tableName: 'posts',

    attributes : {
        title: {
            type: 'string',
            required: true
        },
        body:{
            type: 'string',
            required: true
        }
    }
}