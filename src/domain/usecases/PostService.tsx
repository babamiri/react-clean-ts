import { Post } from "../entities/Post";
import { PostRepository } from "../repositories/PostRepository";
// import moment from "moment";

export class PostServiceImpl implements PostRepository {
  itemRepo: PostRepository;

  constructor(ir: PostRepository) {
    this.itemRepo = ir;
  }

  async GetPost(): Promise<Post[]> {
    return await this.itemRepo.GetPost();
  }
 
 

}
