const express = require('express');
const router = express.Router();
const async = require('async');
const jwt = require('../../module/jwt.js');
const db = require('../../module/pool.js');
const http = require('http');

//http request;
router.get('/', async(req, res, next) => {
    /*const category = 'select * from Categorys order by category_like DESC';
    let result = await db.FindAll(category);
    res.status(200).send({result});*/
    await http.get('http://127.0.0.1:3000/test', (res) => {
        console.log(res.body);
    });
});

router.post('/', async(req, res, next) => {
    const id = req.body.id;
    const categories = req.body.categories;
    const select = 'insert into Favorits set ?';
    let result;
    for (i = 0; i < categories.length; i++) {
        let data = {
            ID: id,
            category_id: categories[i]
        };
        result = await db.execute(select, data);
    }
    console.log(result);
    if (result != undefined) {
        res.status(201).send({message: 'Signup success'});
    } else {
        res.status(405).send({message: 'Signup failed'});
    }
});

module.exports = router;
