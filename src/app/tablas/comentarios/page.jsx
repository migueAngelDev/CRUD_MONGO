import styles from "./comentarios.module.css";
import { connectDB } from "@/utils/mongoose";
import Comment from "@/models/Comment";

// const loadComment = async () => {
//   // connectDB();

//   try {
//     const comments = await fetch("/api/comments");
//     console.log(comments);
//     return comments;
//   } catch (error) {
//     console.log(error);
//     console.log(error.message);
//   }
//   // const comments = await Comment.find();
// };

const loadComment = async () => {
  try {
    // Realiza la solicitud GET a la ruta /api/comments y espera la respuesta
    const response = await fetch(
      "https://mongodb-azure.vercel.app/api/comments"
    );

    // Verifica si la respuesta es exitosa (código de estado 200)
    if (response.status === 200) {
      // Convierte la respuesta a JSON para obtener los datos
      const comments = await response.json();
      return comments;
    } else {
      console.log("Error al obtener datos. Código de estado:", response.status);
      return []; // Otra acción en caso de error, por ejemplo, retornar un array vacío
    }
  } catch (error) {
    console.log("Error en la solicitud:", error);
    return []; // Manejar errores de red
  }
};

const TableComments = async () => {
  const comments = await loadComment();

  const titles = [
    {
      title: "Nombre",
    },
    {
      title: "Edad",
    },
    {
      title: "Genero",
    },
    {
      title: "Comentario",
    },
    {
      title: "Calificación",
    },
  ];

  const mapTitles = titles.map(({ title }) => <th key={title}>{title}</th>);

  const mapComments = comments.map((comment) => (
    <tr key={comment._id} className={styles.tbTr}>
      <td>{comment.name}</td>
      <td>{comment.age}</td>
      <td>{comment.gender}</td>
      <td>{comment.comment}</td>
      <td>{comment.calification}</td>
    </tr>
  ));

  return (
    <>
      <h2>Comentarios</h2>
      <section className={styles.TableProducts}>
        <table className={styles.tableDataProduct}>
          <thead>
            <tr>{mapTitles}</tr>
          </thead>
          <tbody>{mapComments}</tbody>
        </table>
      </section>
    </>
  );
};

export default TableComments;
