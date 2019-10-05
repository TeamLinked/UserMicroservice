var express = require('express');
var router = express.Router();

let tag = require("../controllers/tag.js");

/*Standard GRUB*/
router.get('/:tag_id', tag.get);
router.delete('/:user_id', tag.delete);
router.put('/:user_id', tag.put);

module.exports = router;
