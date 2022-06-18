
import React, { useEffect } from "react";
import axios from "axios";
import { Post as IPost } from "../domain/entities/Post"
import { PostRepositoryImpl } from "../data/repositories/PostRepositoryImpl"


const defaultPosts: IPost[] = [];

function List() {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);


  const fetch = async () => {
    const postRepoX = new PostRepositoryImpl();

    const items = await postRepoX.GetPost();
    setPosts(items);
  }


  useEffect(() => {

    fetch();
    // axios
    //   .get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     console.log(response.data);
    //     setPosts(response.data);
    //   });
  }, []);



  return (
    <div className="App">
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
