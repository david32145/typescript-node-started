import {Router} from "express"
import PostController from "./controllers/PostController"

const routes = Router()

routes.get("/post", PostController.index) // Show all posts
routes.get("/post/:id", PostController.show) // Show an specific post
routes.post("/post", PostController.add) // Create an post
routes.put("/post/:id", PostController.update) // Update an specific post
routes.delete("/post/:id", PostController.delete) // Delete an specific post

export default routes