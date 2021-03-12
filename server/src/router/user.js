const { createUser, getUser, getUserbyId, updateUser, deleteUser } = require("../controller/user");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/create", createUser);
router.get("/alluser", getUser);
router.get("/:id", getUserbyId);
router.put("/:id", checkToken ,updateUser);
router.delete("/:id", deleteUser);

module.exports = router;