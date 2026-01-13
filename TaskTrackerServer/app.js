import express from "express";
import taskRoutes from "./routes/tasks.route.js";

const app = express();

/* middleware */
app.use(express.json());

/* routes */

// Routes
app.use("/api/tasks", taskRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

export default app;
