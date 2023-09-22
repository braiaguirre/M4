const express = require("express");
const {Character} = require('./db/index');
const characterMiddleware = require("./middlewares/character.js");
// const abilityMiddleware = require("./middlewares/ability.js");

const server = express();

server.use(express.json());

server.use("/character", characterMiddleware);
// server.use("/ability", abilityMiddleware);

server.get("/", (req, res) => {
  res.send("Henry Sequelize Homework");
});

server.post('/character', async (req, res) => {
  try {
    const {character} = req.body;
    if (!character) res.status(404).send('Falta enviar datos obligatorios');
    const response = await Character.create(character);
    res.status(201).send(response);
  } catch (err) {
    res.status(404).send('Error en alguno de los datos provistos');
  }
});

module.exports = server;
