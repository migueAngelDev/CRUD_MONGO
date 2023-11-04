"use client";
import { useRouter } from "next/navigation";
import styles from "./usuarios.module.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const FormUsers = () => {
  const router = useRouter();

  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (field, value) => {
    setNewUser({
      ...newUser,
      [field]: value,
    });
  };

  const createNewUSer = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      router.push("/tablas/usuarios");
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
    await createNewUSer();
  };

  return (
    <>
      <section className={styles.wrapperFormProducts}>
        <form onSubmit={handleOnSubmit} className={styles.formProducts}>
          <h2>Agrega la información del usuario</h2>
          <TextField
            variant="outlined"
            label="Nombre"
            type="text"
            className={styles.field}
            value={newUser.name}
            onChange={(e) => handleOnChange(e.target.value, "name")}
          />
          <TextField
            variant="outlined"
            label="Apellidos"
            type="text"
            className={styles.field}
            value={newUser.lastName}
            onChange={(e) => handleOnChange(e.target.value, "lastName")}
          />
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            className={styles.field}
            value={newUser.email}
            onChange={(e) => handleOnChange(e.target.value, "email")}
          />
          <TextField
            variant="outlined"
            label="Contraseña"
            type="password"
            className={styles.field}
            value={newUser.password}
            onChange={(e) => handleOnChange(e.target.value, "password")}
          />
          <TextField
            variant="outlined"
            label="Confirmar contraseña"
            type="password"
            className={styles.field}
            value={newUser.confirmPassword}
            onChange={(e) => handleOnChange(e.target.value, "confirmPassword")}
          />
          <Button type="submit" variant="contained">
            Agregar
          </Button>
        </form>
      </section>
    </>
  );
};

export default FormUsers;
