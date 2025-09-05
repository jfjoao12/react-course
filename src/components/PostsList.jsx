import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import styles from "./PostsList.module.css";

function PostsLists() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no pots yet.</h2>
          <p>Don't just look, add a post!</p>
        </div>
      )}
    </>
  );
}

export default PostsLists;
