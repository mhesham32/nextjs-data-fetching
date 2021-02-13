import { promises as fs } from "fs";
import path from "path";
import styles from "../styles/Home.module.css";

const ExampleOne = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>Example One</h1>
        <p className={styles.paragraph}>{text}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({}) => {
  const filePath = path.join(process.cwd(), "text.txt");
  const fileContents = await fs.readFile(filePath, "utf8");
  return {
    props: { text: fileContents },
  };
};

// ExampleOne.getInitialProps = async ({}) => {
//   const filePath = path.join(process.cwd(), "text.txt");
//   const fileContents = await fs.readFile(filePath, "utf8");
//   return {
//     props: { text: fileContents },
//   };
// };

export default ExampleOne;
