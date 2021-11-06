import styles from "./Header.module.css";

const SubHeader = () => {
  const today = new Date().toLocaleDateString();
  return (
    <>
      <h2 className={styles.subChristmas}>
        DAG: {today}
        <hr />
        Som enhver julekalender er det 24 luker eller i dette tilfellet 24 små
        videoer.
      </h2>
    </>
  );
};

export default SubHeader;
