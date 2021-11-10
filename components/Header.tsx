import styles from "./Header.module.css";

const createCoolText = (text: string) => {
  return text.split("").map((letter, i) => {
    const color = i % 2 == 0 ? "#BF0404" : "#365902";
    return (
      <span className={styles.christmas} style={{ color }} key={i}>
        {letter}
      </span>
    );
  });
};

const Header = () => {
  return <h1>{createCoolText("Juleølkalender")}</h1>;
};

export default Header;
