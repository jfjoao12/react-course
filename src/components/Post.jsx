//const names = ['Maximilian', 'Manuel'];
import styles from "./Post.module.css";
import { Link } from "react-router-dom";

/* Alternative way to pass props
function Post({ author, body }) {
  //const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}
*/

function Post(props) {
  //const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <li className={styles.post}>
      <Link to={props.id}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.text}>{props.body}</p>
      </Link>
    </li>
  );
}

export default Post;
