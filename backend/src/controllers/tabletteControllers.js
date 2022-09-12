const models = require("../models");

const getTablettes = (req, res) => {
  models.tablettes
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getTabletteById = (req, res) => {
  models.tablettes
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const putTablette = (req, res) => {
  const tablettes = req.body;

  // TODO validations (length, format...)

  tablettes.id = parseInt(req.params.id, 10);

  models.tablettes
    .update(tablettes)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postTablette = (req, res) => {
  const tablettes = req.body;

  // TODO validations (length, format...)

  models.tablettes
    .insert(tablettes)
    .then(([result]) => {
      res.location(`/items/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteTablette = (req, res) => {
  models.tablettes
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getTablettes,
  getTabletteById,
  postTablette,
  putTablette,
  deleteTablette,
};
