//const names = ['Maximilian', 'Manuel'];
import styles from './Post.module.css';

function Post(props) {

  //const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
  <li className={styles.post}>
    <p className={styles.author}>{props.author}</p>
    <p className={styles.text}>{props.body}</p>
  </li>
  );
}

export default Post