import express, { urlencoded, json } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import todosRouter from './routes/todos.js'

// get environment variables to setup the server
dotenv.config()
const dbUrl = process.env.DB_URL
const port = process.env.PORT

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/todos', todosRouter)

const start = async () => {
  try {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
    })
    app.listen(port, () => {
      console.log(`server started on port ${port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
