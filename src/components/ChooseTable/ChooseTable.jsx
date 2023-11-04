import styles from "@/components/ChooseTable/ChooseTable.module.css";
import Link from "next/link";

const ChooseTable = ({ title, path }) => {
  return (
    <>
      <Link href={path} className={styles.containerTable}>
        <article className={styles.chTable}>
          <h2>{title}</h2>
        </article>
      </Link>
    </>
  );
};

export default ChooseTable;
