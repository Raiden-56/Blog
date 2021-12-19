import styles from "../styles/components/Markdown.module.scss";

function Markdown() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.button}>Edit</div>
        <div className={styles.button}>Preview</div>
      </div>
      <textarea className={styles.textarea}></textarea>
    </div>
  );
}

export default Markdown;
