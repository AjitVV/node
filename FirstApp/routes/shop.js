const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/products', (req,res,next) => { 
    var list = ["item1", "item2", "item3"];
    res.json(list);
});

module.exports = router;