import styles from "./productos.module.css";
import { connectDB } from "@/utils/mongoose";
import Product from "@/models/Product";

const loadProduct = async () => {
  connectDB();
  const products = await Product.find();
  return products;
};

const TableProducts = async () => {
  const products = await loadProduct();

  const titles = [
    { title: "Nombre" },
    { title: "Descripción" },
    { title: "categoría" },
    { title: "precio" },
    { title: "stock" },
  ];

  const mapTitles = titles.map(({ title }) => <th key={title}>{title}</th>);

  const mapProduct = products.map((product) => (
    <tr key={product._id} className={styles.tbTr}>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
    </tr>
  ));

  return (
    <>
      <h2>Productos</h2>
      <section className={styles.TableProducts}>
        <table className={styles.tableDataProduct}>
          <thead>
            <tr>{mapTitles}</tr>
          </thead>
          <tbody>{mapProduct}</tbody>
        </table>
      </section>
    </>
  );
};

export default TableProducts;
