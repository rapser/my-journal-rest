module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {
    postId: {
      type: 'string', 
      required: true
    }
  },


  exits: {
    invalid: {
      description: 'ha ocurrido un error on el servidor'
    }
  },


  fn: async function (inputs) {

    console.log('Intenta eliminar el post con id:' + inputs.postId)
    const record = await Post.destroy({id: inputs.postId}).fetch()

    console.log(record)
    if (record.length == 0) {
      throw({invalid: {error: 'el registro no existe'}})
    }

    return record;

  }


};
