const db = require("../data/db-config.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(candy) {
  const [id] = await db("candy").insert(candy, "id");

  return db("candy")
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

// function remove(id) {
//   return null;
// }

function remove(id) {
  return db("candy")
    .where("id", id)
    .del();
}

function getAll() {
  return db("candy");
}

function findById(id) {
  return null;
}
