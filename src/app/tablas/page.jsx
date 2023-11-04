import styles from "@/app/tablas/Tablas.module.css";
import ChooseTable from "@/components/ChooseTable/ChooseTable";
const Tablas = () => {
  const tablas = [
    {
      title: "Ver tabla de productos",
      path: "/tablas/productos",
    },
    {
      title: "Ver tabla de comentarios",
      path: "/tablas/comentarios",
    },
    {
      title: "Ver tabla de usuarios",
      path: "/tablas/usuarios",
    },
  ];

  const mapTablas = tablas.map(({ title, path }) => (
    <ChooseTable key={title} title={title} path={path} />
  ));

  return (
    <>
      <section className={styles.containerTables}>
        <h1>Escoge una tabla de datos</h1>
        <ul className={styles.groupTables}>{mapTablas}</ul>
      </section>
    </>
  );
};

export default Tablas;
