import { connect, connection } from "mongoose";
// import { MONGODB } from "@/app/config/config";
const MONGODB = process.env.MONGODB_URI;
const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;
  const db = await connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", (err) => {
  console.log("Mongoose error: " + err);
});
