module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    title: {
      description: 'title of post',
      type: 'string',
      required: true
    },
    postBody:{
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    console.log('ahora estamos dentro de post/create')

    await Post.create({'title': inputs.title, 'postBody': inputs.postBody})
    return;

  }


};
