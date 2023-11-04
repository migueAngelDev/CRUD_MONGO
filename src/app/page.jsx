// import { connectDB } from "@/utils/mongoose";
// import Task from "@/models/Product";
import styles from "@/app/HomePage.module.css";
import { Button } from "@mui/material";

// const loadTask = async () => {
//   connectDB();
//   const tasks = await Task.find();
//   return tasks;
// };

function HomePage() {
  // const tasks = await loadTask();

  // const mapTask = tasks.map((task) => (
  //   <li key={task._id}>
  //     <h2>{task.title}</h2>
  //     <p>{task.description}</p>
  //   </li>
  // ));

  return (
    <>
      <main className={styles.main}>
        <section className={styles.stOne}>
          <h2>The React Framework for the web</h2>
          <p>
            Used by some of the worlds largest companies, Next.js enables you to
            create <span>full-stack Web applications </span>by extending the
            latest React features, and integrating powerful Rust-based
            JavaScript tooling for the fastest builds.
          </p>
          <Button variant="contained" href="/formularios">
            Empezar
          </Button>
        </section>
        <section className={styles.stTwo}></section>
      </main>
    </>
  );
}

export default HomePage;
