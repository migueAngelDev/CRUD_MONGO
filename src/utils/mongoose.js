import { connect, connection } from "mongoose";
import { MONGODB } from "@/app/config/config";
const conn = {
  isConnected: false,
};

export async function connectDB() {
  try {
    if (conn.isConnected) return;
    const db = await connect(MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}

connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", (err) => {
  console.log("Mongoose error: " + err);
});
