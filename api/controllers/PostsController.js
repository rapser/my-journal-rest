module.exports = {
    posts: async function(req, res){
        try{
            const posts = await Post.find()
            res.send(posts)
        } catch{
            res.serverError(err.toString())
        }
    },

    create: function(req, res){
        const title = req.body.title
        const postBody = req.body.postBody

        sails.log.debug(title + " " + postBody)
        Post.create({title: title, body: postBody}).exec(function(err){

            if (err){
                return res.serverError(err.toString())
            }

            console.log("Creacion finalizada de objeto post")
            return res.redirect('/home')
        })
    },

    findById: async function(req, res){
        const postId = req.param('postId')

        const allPosts = await Post.find()
        const filteredPosts = allPosts.filter(p => { return p.id == postId})

        if (filteredPosts.length > 0){
            res.send(filteredPosts[0])
        }else {
            res.send('No se encontro el post con id: ' + postId)
        }

    },

    delete: async function(req, res){
        const postId = req.param('postId')

        await Post.destroy({id: postId})
        res.send('Eliminando post ahora')
    },

    update: function(req, res){
        // sails.log.debug(req.param('postId'))
        const postId = req.param('postId')

        Post.update(postId, req.allParams()).fetch()
        .then(function(post){

            return res.send({
                'success': true,
                'message': 'Record updated',
                'data': post
            })
        })

        .catch(function(err){
            sails.log.debug(err)
            return res.send({
                'success': false,
                'message': 'no se puede actualizar'
            })
        })
    }



}