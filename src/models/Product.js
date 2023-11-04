import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: "string",
      required: [true, "El nombre del producto es requerido"],
      unique: true,
      trim: true,
    },
    description: {
      type: "string",
      required: [true, "La descripcion es requerida"],
      trim: true,
    },
    price: {
      type: "number",
      required: [true, "El precio es requerido"],
      trim: true,
    },
    category: {
      type: "string",
      required: [true, "La categoria es requerida"],
      trim: true,
    },
    stock: {
      type: "number",
      required: [true, "El stock es requerida"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Product || model("Product", productSchema);
