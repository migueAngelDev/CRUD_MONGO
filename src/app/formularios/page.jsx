import styles from "@/app/formularios/formularios.module.css";
import ChooseForm from "@/components/ChooseForm/ChooseForm";
const Forms = () => {
  /*
  addComments
  addProduct
  addOfertas
  */

  const formularios = [
    {
      title: "Agrega un producto",
      path: "/formularios/productos",
    },
    {
      title: "Agrega un comentario",
      path: "/formularios/comentarios",
    },
    {
      title: "Agrega un usuario",
      path: "/formularios/usuarios",
    },
  ];

  const mapFormularios = formularios.map(({ title, path }) => (
    <ChooseForm title={title} path={path} key={title} />
  ));
  return (
    <>
      <section className={styles.containerForms}>
        <h1>Escoge un formulario</h1>
        <ul className={styles.groupForms}>{mapFormularios}</ul>
      </section>
    </>
  );
};

export default Forms;
