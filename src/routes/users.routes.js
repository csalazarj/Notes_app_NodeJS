const { Router } = require("express");
const router = Router();

const {
  renderSingUpForm,
  renderSigninForm,
  signin,
  signup,
  logout,
} = require("../controllers/users.controller");

router.get("/users/signup", renderSingUpForm);

router.post("/users/signup", signup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

module.exports = router;
