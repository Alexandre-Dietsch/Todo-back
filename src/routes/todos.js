import express from 'express'
import { getAllTodos, createOneTodo } from '../controllers/todos.js'

const router = express.Router()

// get all todos, add a todo
router.route('/').get(getAllTodos).post(createOneTodo)

// get, update or delete one todo
router.route('/:id').get().put().delete()

export default router
