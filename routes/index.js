const express = require('express');
const router = express.Router();

module.exports = app => {

    router.get('/api/blog', (req, res) => {
        res.json({ mensaje: "its ok"});
    });

    app.use(router);

}