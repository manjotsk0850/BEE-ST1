const mongoose = require('mongoose')
const express = require('express')
const Books = require('../models/book')
const BookServices=require('../services/bookServices')

exports.createBook = async (req,res) => {
    const inputData=req.body;
    console.log('inputData',inputData);
    const details = await BookServices.createBook(inputData);
    console.log('details',details);
}


exports.getBook=async(req,res)=>{
    const data = await Books.find()
    res.status(200).json({data:data});
}

exports.updateBook=async(req,res)=>{
    await Books.updateOne({author: "Manjot"}, {
        $set: {
            title: req.body.maker
        }
    });
    res.status(200).json({
        message: "Book updated"
    })
}

exports.deleteProduct=async(req,res)=>{
    await Books.deleteOne({title:"Rich Dad Poor Dad"});
    res.status(200).json({
        message:"Book deleted"
    })
}