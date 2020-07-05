const express = require("express");

const app = express();

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no bakc-end
 * DELETE: Deletar uma informação no back-end
 */

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.get("/projects", (req, res) => {
  return res.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (res, req) => {
  return res.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (req, res) => {
  return res.json(["Projeto 4", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});
app.listen(3333, () => {
  console.log("🚀 Back-end started!");
});
