const { login } = require("../controller/login");
const router = require("express").Router();

router.post("/", login);

module.exports = router;