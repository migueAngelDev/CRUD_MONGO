"use client";
import styles from "@/app/formularios/productos/productos.module.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormPorducts = () => {
  const router = useRouter();

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleOnChange = (value, field) => {
    setNewProduct({
      ...newProduct,
      [field]: value,
    });
  };

  const createNewProduct = async () => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      router.push("/tablas/productos");
      router.refresh();
      console.log(res);
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await createNewProduct();
  };

  return (
    <>
      <section className={styles.wrapperFormProducts}>
        <form onSubmit={handleOnSubmit} className={styles.formProducts}>
          <h2>Agrega los detalles del producto</h2>
          <TextField
            variant="outlined"
            label="Nombre del producto"
            type="text"
            className={styles.field}
            value={newProduct.name}
            onChange={(e) => handleOnChange(e.target.value, "name")}
          />
          <TextField
            variant="outlined"
            label="Descripción del producto"
            type="text"
            className={styles.field}
            value={newProduct.description}
            onChange={(e) => handleOnChange(e.target.value, "description")}
          />
          <TextField
            variant="outlined"
            label="Precio del producto"
            type="tel"
            className={styles.field}
            value={newProduct.price}
            onChange={(e) => handleOnChange(e.target.value, "price")}
          />
          <TextField
            variant="outlined"
            label="Categoría del producto"
            type="text"
            className={styles.field}
            value={newProduct.category}
            onChange={(e) => handleOnChange(e.target.value, "category")}
          />
          <TextField
            variant="outlined"
            label="Stock"
            type="tel"
            className={styles.field}
            value={newProduct.stock}
            onChange={(e) => handleOnChange(e.target.value, "stock")}
          />
          <Button type="submit" variant="contained">
            Agregar
          </Button>
        </form>
      </section>
    </>
  );
};

export default FormPorducts;
