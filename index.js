import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productsRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import usersRouter from "./src/routes/users.routes.js";
import { authentication } from "./src/middleware/authentication.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); // middleware para interpretar los body de las peticiones en formato JSON

const corsOptions = {
  origin: ["/api/products", "/auth/login", "/api/users"],
  methods: "GET,HEAD,PUT,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentiels: true,
};
app.use(cors(corsOptions)); // para habilitar las peticiones de origen cruzado Front

app.use("/auth/login", authRouter);
app.use("/api/users", usersRouter);

app.use(authentication);

//Rutas
app.use("/api/products", productsRouter);

app.use((req, res, next) => {
  res.status(404).send("Resource not found or invalid route");
});

app.use((err, req, res, next) => {
  if (err.status == 401) {
    res.status(401).send("Unauthorized");
  }
  if (err.status == 403) {
    res.status(403).send("Forbidden");
  }
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
