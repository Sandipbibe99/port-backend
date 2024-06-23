import express from 'express'
import { createUser } from '../controller/userController.js'

const routes = express.Router()


routes.post("/add" , createUser)

export default routes