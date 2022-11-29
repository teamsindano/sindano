const express = require('express');
const cors = require('cors');

module.exports = [
    cors(),
    express.json(),
    (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
    },
];

