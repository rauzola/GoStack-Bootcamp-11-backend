const express = require("express");

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no bakc-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros:
 *
 * Query Parmas: Filtros e paginação
 * Route Params: Identificar recursos(Atualizar/Deletar)
 * Request Body: Conteúdo na hora criar ou editar um recurso (JSON)
 */

app.get("/projects", (request, response) => {
  const { title, owner } = request.query;

  console.log(title);
  console.log(owner);

  return response.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (request, response) => {
  const params = request.params;

  console.log(params);

  return response.json(["Projeto 4", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});
app.listen(3333, () => {
  console.log("🚀 Back-end started!");
});
