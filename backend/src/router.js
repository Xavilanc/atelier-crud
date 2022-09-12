const express = require("express");

const router = express.Router();

const tabletteControllers = require("./controllers/tabletteControllers");

router.get("/tablettes", tabletteControllers.getTablettes);
router.get("/tablettes/:id", tabletteControllers.getTabletteById);
router.put("/tablettes/.id", tabletteControllers.putTablette);
router.post("/tablettes", tabletteControllers.postTablette);
router.delete("/tablettes/:id", tabletteControllers.deleteTablette);

module.exports = router;
