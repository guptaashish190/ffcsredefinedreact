const router = require('express').Router();


router.get('/', (req,res) => {
    res.send(req.username);
});

module.exports = router;