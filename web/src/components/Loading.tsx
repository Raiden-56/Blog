import styles from "../styles/components/Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  );
};

export default Loading;
