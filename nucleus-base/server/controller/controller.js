

var Blogdb = require('../model/blog')


//create and save new blog
exports.create =(req,res) => {
if(!req.body){
    res.status(400).send({message:"Content cannot be empty"});
    return;
}

const blog = new Blogdb({
    title : req.body.title,
    content : req.body.content,
    imgUrl : req.body.imgUrl,
    refUrl : req.body.refUrl,
    keyWords : req.body.keyWords,
    likes : req.body.likes,
});


blog.save(blog)
.then(data => {res.send(data)})
.catch(err => {
    res.status(500).send({
        message :err.message ||"some error occured while saving data"
    });
});
}

// retrieve and return blog with id
exports.find = (req,res) =>{
    console.log('hai')
    console.log(req.query.id);
    if(req.query.id){
        const id = req.query.id;
        Blogdb.findById(id)
    .then(data => {
        if(!data){
            res.status(404).send({message : `Cannot get data of id ${id}`})
        }else{
        res.send(data)
        }
    })
    .catch(
        err => {
            res.status(500).send({message: err.message || `Error occured while retriving data of id ${id}`})
        });
    }
    else{
    Blogdb.find()
    .then(blog => {
        res.send(blog)
    })
    .catch(
        err => {
            res.status(500).send({message: err.message || "Error occured while retriving data"})
        });
    }
}


// update blog by id
exports.update = (req,res) => {
    if(!req.body){
        res.status(400).send({message:"Update content id cannot be empty"});
        return;
    }
    const id = req.params.id;

    Blogdb.findByIdAndUpdate(
        id,req.body,{useFindAndModify : false})
        .then(
            data => {
                if(!data){
                    res.status(404).send({message : `Cannot update blog with id ${id}`})
                }else{
                    res.send(data);
                }
            }
        )
        .catch(err => res.status(500).send({message : err.message || "Failed to update"}))
}


//delete blog by id

exports.delete = (req,res) =>{
const id = req.params.id;

Blogdb.findByIdAndDelete(id)
.then(
    data => {
        if(!data){
            res.status(404).message({message: `Cannot delete the blog with id ${id}`})
        }
        else{
            res.send({message: "Blog deleted successfully"})
        }
    }
)
.catch(err => 
    res.status(500).send({message:`Cannot delete blog with id ${id}`}))
}

