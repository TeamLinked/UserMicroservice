var express = require('express');
var router = express.Router();

let tag = require("../controllers/tag.js");

/*Standard GRUB*/
router.get('/', tag.gets);
router.post('/', tag.post);

module.exports = router;
