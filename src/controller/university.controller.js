const express = require("express");
const {
  createUser,
  getAll,
  updateUserById,
} = require("../service/university.service");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post("/", async (req, res) => {
  try {
    const { name, surname, birth, city, age } = req.body;
    const data = await createUser(name, surname, birth, city, age);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post("/:usersId/:info_id", async (req, res) => {
  try {
    const { usersId, info_id } = req.params;
    const { name, surname, birth, city, age } = req.body;
    const data = await updateUserById(
      usersId,
      info_id,
      name,
      surname,
      birth,
      city,
      age
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
module.exports = { route };
