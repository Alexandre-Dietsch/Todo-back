import Todo from '../models/todo.js'

// get all todos
export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).exec()
    res.status(200).json({ data: todos })
  } catch (error) {
    console.error(error)
    res.status(500).json({ detail: 'Error while retrieving todos' })
  }
}

// create one todo
export const createOneTodo = async (req, res) => {
  try {
    await Todo.create({ ...req.body })
    const todos = await Todo.find({}).exec()
    res.status(201).json({ data: todos })
  } catch (error) {
    console.error(error)
    res.status(500).json({ detail: 'Error while creating a todo' })
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
      .status(500)
      .json({ detail: 'Error while retrieving a todo with this ID' })
  }
}

// update one todo
export const updateOneTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { ...req.body, updatedAt: new Date() },
      { new: true }
    )
      .lean()
      .exec()

    if (!updatedTodo)
      return res.status(400).json({ detail: 'This todo does not exist' })

    const todos = await Todo.find({}).lean().exec()
    res.status(200).json({ data: todos })
  } catch (error) {
    console.error(error)
    res.status(500).json({ detail: 'Error while updating this todo' })
  }
}

// remove a todo
export const removeOneTodo = async (req, res) => {
  try {
    const removedTodo = await Todo.findOneAndRemove({
      _id: req.params.id,
    })

    if (!removedTodo)
      return res.status(400).json({ detail: 'This todo does not exist' })

    const todos = await Todo.find({}).lean().exec()
    return res.status(200).json({ data: todos })
  } catch (error) {
    console.error(error)
    res.status(500).json({ detail: 'Error while deleting this todo' })
  }
}
