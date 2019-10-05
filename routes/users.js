var express = require('express');
var router = express.Router();

let user = require("../controllers/user.js");

/*Standard GRUB*/
router.get('/', user.gets);
router.post('/', user.post);

module.exports = router;
