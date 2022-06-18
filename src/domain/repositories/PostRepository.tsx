import { Post } from "../entities/Post";

export interface PostRepository {
  GetPost(): Promise<Post[]>;
}
