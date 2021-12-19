import styles from "../styles/components/Button.module.scss";

function Button({ text, onClick }: { text: string; onClick: (_: any) => any }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Login
    </button>
  );
}

export default Button;
