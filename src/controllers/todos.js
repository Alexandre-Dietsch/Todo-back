import Todo from '../models/todo.js'

// get all todos
export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).exec()
    res.status(200).json({ data: todos })
  } catch (error) {
    console.error(error)
    res.status(400).end()
  }
}

// create one todo
export const createOneTodo = async (req, res) => {
  try {
    const todo = await Todo.create({ ...req.body })
    res.status(201).json({ data: todo })
  } catch (error) {
    console.error(error)
    res.status(400).end()
  }
}

// get one todo
export const getOneTodo = async (req, res) => {
  try {
    const oneTodo = await Todo.findOne({ _id: req.params.id }).lean().exec()

    if (!oneTodo)
      return res.status(400).json({ detail: 'No todo found with this ID' })

    res.status(200).json({ data: oneTodo })
  } catch (error) {
    console.error(error)
    res
      .status(400)
      .json({ detail: 'Error while retrieving a todo with this ID' })
  }
}
