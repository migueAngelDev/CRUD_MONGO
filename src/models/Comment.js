import { Schema, model, models } from "mongoose";

const SchemaComment = new Schema(
  {
    name: {
      type: "string",
      required: [true, "El nombre es requerido"],
      trim: true,
    },
    age: {
      type: "number",
      required: [true, "La edad es requerida"],
      trim: true,
    },
    gender: {
      type: "string",
      required: [true, "El genero es requerido"],
      trim: true,
    },
    comment: {
      type: "string",
      required: [true, "El comentario es requerido"],
      trim: true,
    },
    calification: {
      type: "number",
      required: [true, "La calificación es requerida"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Comment || model("Comment", SchemaComment);
