import mongoose from 'mongoose'

const { Schema, model } = mongoose

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: false,
  },
  limit: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
  isArchived: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const Todo = model('Todo', todoSchema)

export default Todo
