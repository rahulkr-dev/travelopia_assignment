

// Define middle ware to handle errors
const errorHandler = async(err,req,res,next)=>{
    console.log(err);
    res.status(404).send({msg:"Server Error",Error:err});
};

module.exports = errorHandler;