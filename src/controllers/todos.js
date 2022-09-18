import Todo from '../models/todo.js'

// Get all todos
export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).exec()
    res.status(200).json({ data: todos })
  } catch (error) {
    console.error(error)
    res.status(400).end()
  }
}

export const createOneTodo = async (req, res) => {
  try {
    console.log(req)
    const todo = await Todo.create({ ...req.body })
    res.status(201).json({ data: todo })
  } catch (error) {
    console.error(error)
    res.status(400).end()
  }
}
