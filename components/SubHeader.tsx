import styles from "./Header.module.css";

const SubHeader = () => {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
  // @ts-ignore :)
  const today = new Date().toLocaleDateString("no", options);
  return (
    <>
      <div className={styles.subChristmas}>
        {today}
        <div className={styles.trailer}>
          <iframe src="https://www.youtube.com/embed/odFnKFkRI3k" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
