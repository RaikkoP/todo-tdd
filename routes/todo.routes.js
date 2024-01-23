const express = require('express');
const TodoController = require('../controller/todo.controller');
const router = express.Router();

router.post("/", TodoController.createTodo);

module.exports = router;