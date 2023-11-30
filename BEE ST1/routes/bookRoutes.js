const express=require('express')
const router=express.Router();

const mongoose = require('mongoose')
const bookControllers = require('../controllers/bookControllers')

//app.use is used for middlewares
router.post(`/POST/api/books`,bookControllers.createBook);
router.get(`/GET/api/books/:id`,bookControllers.getBook);
router.get(`/GET/api/books/`,bookControllers.getallBooks);
router.put(`/PUT/api/books/:id`,bookControllers.updateBook);
router.delete(`/DELETE/api/books/:id`, bookControllers.deleteBook);

// routing krke access app ko de raha hoon
module.exports = router;