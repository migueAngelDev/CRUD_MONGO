import styles from "./usuarios.module.css";
import { connectDB } from "@/utils/mongoose";
import User from "@/models/User";

const loadUser = async () => {
  await connectDB();
  const users = await User.find();
  return users;
};

const TableUsers = async () => {
  const users = await loadUser();

  const titles = [
    {
      title: "Nombre",
    },
    {
      title: "Apellidos",
    },
    {
      title: "Email",
    },
    {
      title: "Contraseña",
    },
    {
      title: "Contraseña confirmada",
    },
  ];

  const mapTitles = titles.map(({ title }) => <th key={title}>{title}</th>);

  const mapUsers = users.map((users) => {
    const hash = crypto.randomUUID();
    return (
      <tr key={users._id} className={styles.tbTr}>
        <td>{users.name}</td>
        <td>{users.lastName}</td>
        <td>{users.email}</td>
        <td>{hash}</td>
        <td>{hash}</td>
      </tr>
    );
  });

  return (
    <>
      <h2>Usuarios</h2>
      <section className={styles.TableProducts}>
        <table className={styles.tableDataProduct}>
          <thead>
            <tr>{mapTitles}</tr>
          </thead>
          <tbody>{mapUsers}</tbody>
        </table>
      </section>
    </>
  );
};

export default TableUsers;
