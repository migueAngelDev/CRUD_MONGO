"use client";
import { useState } from "react";
import styles from "./comentarios.module.css";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const FormComments = () => {
  const [newComment, setNewComment] = useState({
    name: "",
    age: "",
    gender: "",
    comment: "",
    calification: "",
  });

  const router = useRouter();

  const handleOnChange = (value, field) => {
    setNewComment({
      ...newComment,
      [field]: value,
    });
  };

  const createNewComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    router.push("/tablas/comentarios");
    router.refresh();
    console.log(res);
    console.log(data);
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      await createNewComment();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className={styles.wrapperFormProducts}>
        <form onSubmit={handleOnSubmit} className={styles.formProducts}>
          <h2>Agrega un comentario hacia un producto</h2>
          <TextField
            variant="outlined"
            label="Nombre"
            type="text"
            className={styles.field}
            value={newComment.name}
            onChange={(e) => handleOnChange(e.target.value, "name")}
          />
          <TextField
            variant="outlined"
            label="Edad"
            type="tel"
            className={styles.field}
            value={newComment.age}
            onChange={(e) => handleOnChange(e.target.value, "age")}
          />
          <TextField
            variant="outlined"
            label="Cual es tu genero"
            type="text"
            className={styles.field}
            value={newComment.gender}
            onChange={(e) => handleOnChange(e.target.value, "gender")}
          />
          <TextField
            variant="outlined"
            label="Agrega un comentario"
            type="text"
            className={styles.field}
            value={newComment.comment}
            onChange={(e) => handleOnChange(e.target.value, "comment")}
          />
          <TextField
            variant="outlined"
            label="Calificación del producto"
            type="tel"
            className={styles.field}
            value={newComment.calification}
            onChange={(e) => handleOnChange(e.target.value, "calification")}
          />
          <Button type="submit" variant="contained">
            Agregar
          </Button>
        </form>
      </section>
    </>
  );
};
export default FormComments;
