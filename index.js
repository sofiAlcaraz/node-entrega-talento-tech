import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors());
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentiels: true,
};

app.use(cors(corsOptions));

//app.get("/auth/login", userRouter);

//app.get("/api/products/", productRouter);

app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado o ruta invalida");
  res.status(500).send("Error interno del servidor");
  res.status(401).send("No autorizado");
  res.status(403).send("Prohibido");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
