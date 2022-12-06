import styles from "../css modules/Card.module.css";

function Card(props) {
  return <div className={styles.card}>{props.children}</div>;
}
export default Card;
