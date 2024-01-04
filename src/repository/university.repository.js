const pool = require("../db");

async function getAllDB() {
  const client = await pool.connect();
  const sql =
    "select * from users_info join users on users.info_id = users_info.id ";
  const { rows } = await client.query(sql);
  return rows;
}

async function updateUserByIdDB(
  usersId,
  info_id,
  name,
  surname,
  birth,
  city,
  age
) {
  const client = await pool.connect();
  const sql1 =
    "UPDATE users_info set birth = $1, city = $2, age = $3 where id = $4 returning *";
  const { rows } = await client.query(sql1, [birth, city, age, info_id]);
  const sql2 =
    "update users set name = $1, surname = $2, info_id = $3 where id = $4 returning * ";
  const { rows: rows2 } = await client.query(sql2, [
    name,
    surname,
    info_id,
    usersId,
  ]);

  return { ...rows2[0], ...rows[0] };
}

async function createUserDB(name, surname, birth, city, age) {
  const client = await pool.connect();
  //   const sql1 = "INSERT INTO users (name, surname) values ($1,$2) returning *";
  const sql1 =
    "INSERT INTO users_info (birth,city,age) values ($1,$2, $3) returning *";
  const { rows } = await client.query(sql1, [birth, city, age]);
  //   const {rows:rows2} =
  const sql2 =
    "INSERT INTO users (name,surname, info_id) values ($1,$2, $3) returning *";
  const { rows: rows2 } = await client.query(sql2, [name, surname, rows[0].id]);
  return { ...rows2[0], ...rows[0] };
}

module.exports = { createUserDB, getAllDB, updateUserByIdDB };
