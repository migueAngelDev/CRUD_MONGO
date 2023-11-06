import styles from "./comentarios.module.css";
import { connectDB } from "@/utils/mongoose";
import Comment from "@/models/Comment";

const loadComment = async () => {
  connectDB();
  const comments = await Comment.find();
  return comments;
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
