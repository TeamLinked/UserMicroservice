var express = require('express');
var router = express.Router();

let user = require("../controllers/user.js");

/*Standard GRUB*/
router.get('/:user_id', user.get);
router.delete('/:user_id', user.delete);
router.put('/:user_id', user.put);

/*Tag management*/
router.post('/tags/:user_id', user.add_tag);
router.delete('/tags/:user_id', user.delete_tag);

module.exports = router;
