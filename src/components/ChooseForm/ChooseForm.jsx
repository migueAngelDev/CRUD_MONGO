import styles from "@/components/ChooseForm/ChooseForm.module.css";
import Link from "next/link";

const ChooseForm = ({ title, path }) => {
  return (
    <>
      <Link href={path} className={styles.containerForm}>
        <article className={styles.chForm}>
          <h2>{title}</h2>
        </article>
      </Link>
    </>
  );
};

export default ChooseForm;
