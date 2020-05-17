const { Router } = require("express");
const router = Router();

const {
  renderSingUpForm,
  renderSigninForm,
  signin,
  signup,
  logout,
} = require("../controllers/users.controller");

// Register user
router.get("/users/signup", renderSingUpForm);
router.post("/users/signup", signup);

// Login user
router.get("/users/signin", renderSigninForm);
router.post("/users/signin", signin);

// Logout user
router.get("/users/logout", logout);

module.exports = router;
