import {Request, Response} from "express"
import PostService, {Post} from "../services/PostService"

class PostController {

    public async index(req: Request<{id: string}>, res: Response): Promise<Response> {
        const posts = PostService.index()
        return res.status(200).send(posts)
    }

    public async add(req: Request<{}, {}, Post>, res: Response): Promise<Response> {
        const post = PostService.add(req.body)
        return res.status(201).send(post)
    }

    public async update(req: Request<{id: string}, {}, Post>, res: Response): Promise<Response> {
        const postId = parseInt(req.params.id)
        const post = PostService.update(req.body, postId)
        return res.status(200).send(post)
    }

    public async show(req: Request<{id: string}>, res: Response): Promise<Response> {
        const post = PostService.show(parseInt(req.params.id))
        return res.status(200).send(post)
    }

    public async delete(req: Request<{id: string}>, res: Response): Promise<Response> {
        PostService.delete(parseInt(req.params.id))
        return res.status(200).send()
    }
}

export default new PostController()