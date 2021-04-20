import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Olá nlw 5")
})

app.post("/", (request, response) => {
  response.send("Usuário criado  com sucesso!")
})

app.listen(3333, () => {
  console.log("server is running on port 3333")
});