const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

router.post('/signup', userControllers.signup);
router.get('/login', userControllers.login);

module.exports = router;