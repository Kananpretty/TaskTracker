import express from "express";
import taskRoutes from "./routes/tasks.route.js";

const app = express();

/* middleware */
app.use(express.json()); // Parses JSON in request body
app.use(express.urlencoded({ extended: true })); // Optional: parses form data

/* routes */
app.use("/api/tasks", taskRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

export default app;
