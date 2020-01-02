module.exports = async function(req, res){
    console.log("Esta ruta muestra las paginas del post")

    const allPosts = await Post.find()

    res.view('pages/home',
        {allPosts}
    )
}