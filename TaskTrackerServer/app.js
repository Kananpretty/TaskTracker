import express from "express";
import taskRoutes from "./routes/tasks.route.js";
import cors from "cors";
import helmet from "helmet";

const app = express();

/* middleware */
app.use(helmet());
app.use(express.json()); // Parses JSON in request body
app.use(express.urlencoded({ extended: true })); // Optional: parses form data

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

/* routes */
app.use("/api/tasks", taskRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;
