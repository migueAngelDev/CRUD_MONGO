import { model, Schema, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: "string",
      required: [true, "El nombre del usuario es requerido"],
      trim: true,
    },
    lastName: {
      type: "string",
      required: [true, "El apellido del usuario es requerido"],
      trim: true,
    },
    email: {
      type: "string",
      required: [true, "El correo del usuario es requerido"],
      trim: true,
    },
    password: {
      type: "string",
      required: [true, "La contraseña del usuario es requerida"],
      trim: true,
    },
    confirmPassword: {
      type: "string",
      required: [true, "El usuario debe de confirmar la contraseña"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.User || model("User", UserSchema);
