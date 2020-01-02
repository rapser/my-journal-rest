const post1 = {id:1, title:'titulo 1', body:'es el detalle'}
const post2 = {id:2, title:'titulo 2', body:'es el detalle nuevo'}
const post3 = {id:3, title:'titulo 3', body:'es el detalle repetido'}

const allPosts = [post1, post2, post3]

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

    findById: function(req, res){
        const postId = req.param('postId')

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
    }

}