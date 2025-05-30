const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// Из за того что в app.js в app.use мы указали базовый путь по которому будет применятся router а именно /api/people, то здесь этот базовый путь надо стереть

// ПЕРВЫЙ способ
// router.get("/", getPeople);

// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// router.put("/:id", updatePerson);

// router.delete("/:id", deletePerson);

// ВТОРОЙ способ
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
