import express from 'express'
import {
  getAllTodos,
  createOneTodo,
  getOneTodo,
  updateOneTodo,
} from '../controllers/todos.js'

const router = express.Router()

// get all todos, add a todo
router.route('/').get(getAllTodos).post(createOneTodo)

// get, update or delete one todo
router.route('/:id').get(getOneTodo).put(updateOneTodo).delete()

export default router
