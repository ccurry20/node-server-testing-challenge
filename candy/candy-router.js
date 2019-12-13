const router = require("express").Router();

const Candy = require("./candy-model.js");

router.get("/", (req, res) => {
  Candy.getAll()
    .then(candys => {
      res.json(candys);
    })
    .catch(err => res.send(err));
});

router.post("/", (req, res) => {
  const body = req.body;
  Candy.insert(body)
    .then(candys => {
      res.json(candys);
    })
    .catch(err => res.send(err));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Candy.remove(id)
    .then(candys => {
      res.json(candys);
    })
    .catch(err => res.send(err));
});

module.exports = router;
