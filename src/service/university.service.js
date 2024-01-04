const {
  createUserDB,
  getAllDB,
  updateUserByIdDB,
} = require("../repository/university.repository");

async function createUser(name, surname, birth, city, age) {
  const data = await createUserDB(name, surname, birth, city, age);
  return data;
}

async function getAll() {
  const data = await getAllDB();
  return data;
}

async function updateUserById(
  usersId,
  info_id,
  name,
  surname,
  birth,
  city,
  age
) {
  const data = await updateUserByIdDB(
    usersId,
    info_id,
    name,
    surname,
    birth,
    city,
    age
  );
  return data;
}
module.exports = { createUser, getAll,updateUserById };
