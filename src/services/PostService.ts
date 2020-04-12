export interface Post {
    id: number
    title: string
    name: string
    description: string
}

class PostService {
    private nextId: number = 1
    private list: Post[] = []

    public index(): Post[]{
        return this.list
    }
    
    public add(newPost: Post): Post {
        newPost.id = this.nextId++
        this.list.push(newPost)
        return newPost
    }

    public update(post: Post, id: number): Post {
        const postFind = this.list.find(p => p.id === id)
        postFind.description = post.description
        postFind.name = post.name
        postFind.title = post.title
        return postFind
    }

    public show(id: number): Post {
        return this.list.find(p => p.id === id)
    }

    public delete(id: number): void {
        this.list = this.list.filter(p => p.id !== id)
    }

}

export default new PostService()