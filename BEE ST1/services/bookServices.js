const mongoose = require('mongoose')
const Book = require('../models/book')

exports.createBook = async(data)=>{
    return await Book.create(data)
}
exports.getBook = async ()=>{
    return await Book.find()
}
