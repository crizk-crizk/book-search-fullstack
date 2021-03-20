import connectDB from "./config/db.js";
import express from "express";
import path from "path";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3001;
const app = express();

app.use([express.urlencoded({ extended: true }), express.json()]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api/books", bookRoutes);

// Link API Routes here
app.get("/", (req, res) => res.send("API is running!"));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(
    "🚀  Server server now on port",
    PORT,
    "👻 React App on Port 3000"
  );
});
