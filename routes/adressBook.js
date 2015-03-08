var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var adressBook = require('../models/adressBook.js');

/* GET /Adress Book listing. */
router.get('/', function(req, res, next) {
    adressBook.find(function (err, recs) {
        if (err) return next(err);
        res.json(recs);
    });
});

/* POST /Adress Book */
router.post('/', function(req, res, next) {
    adressBook.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/* GET /adressBook/id */
router.get('/:id', function(req, res, next) {
    adressBook.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /adressBook/:id */
router.put('/:id', function(req, res, next) {
    adressBook.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /adressBook/:id */
router.delete('/:id', function(req, res, next) {
    adressBook.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;