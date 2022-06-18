import { Post } from "../../domain/entities/Post";
import { PostRepository } from "../../domain/repositories/PostRepository";

class PostDTO {
  id: number = 0;
  userId: number = 0;
  title: string = "";
  body: string = "";
}

const STORAGE_NAME = "Post";

export class PostRepositoryImpl implements PostRepository {
  url = "https://jsonplaceholder.typicode.com/posts";
  async GetPost(): Promise<Post[]> {
    const res = await fetch(this.url);
    const jsonData = await res.json();
    
    return jsonData.map((item: Post) => ({
      id: item.id,
      name: item.name,
      title: item.title,
    }));
  }

  // async GetPost(): Promise<Post[]>{
  //   type Statuses = Array<Post>;
  //   var itemArray: Statuses = [
  //     new Post(1,1,"title","body"),
  // ]

  //   return itemArray.map((item: PostDTO) => new Post(item.id, item.userId, item.title,item.body));
  // }
}
