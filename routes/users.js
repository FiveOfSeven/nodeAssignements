const express = require('express');
const router = express.Router();

const userList = [];

router.get('/users', (req, res, next) => {
    res.render('users', {
        title: 'Users',
        userList: userList
    })
});

router.post('/users/adduser', (req, res, next) => {
    console.log('req.body: ', req.body);
    userList.push({ name: req.body.userName });
    res.redirect('/');
});

module.exports = {router: router, userList: userList};