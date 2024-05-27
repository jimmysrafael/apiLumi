import express from "express";
import { prismaClient } from "./database";
const cors = require('cors');

const app = express();

// Configurar o middleware CORS
app.use(cors({
  origin: 'https://projeto-lumi-rho.vercel.app' // Substitua pelo seu domínio
}));

app.use(express.json());

const port = process.env.PORT ?? 4000;

app.get("/lumi", async (request, response) => {
  const lumiV = await prismaClient.lumi.findMany();
  return response.json(lumiV);
});

app.listen(port, () => console.log("Server is running on port ", port));
