const mongoose=require('mongoose');
const Books = mongoose.Schema({
    title:{type:String},
    author:{type:String},
    genre:{type:String},
    publicationYear:{type:String},
    ISBN: {type:Number}
})

module.exports=mongoose.model('Books', Books)