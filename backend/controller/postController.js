const Post = require("../model/Post");

//Controller
exports.createPost = async (req, res, next) => {
  try {
    const { title, meta, content, slug, author, tags, feature } = req.body;

    const newPost = {
      title,
      meta,
      content,
      slug,
      author,
      tags,
    };

    
    let post = new Post(newPost);
    await post.save();

    
    res.json(post);


  } catch (error) {
    next(error)
  }
};
