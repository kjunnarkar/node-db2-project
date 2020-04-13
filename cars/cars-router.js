const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const results = await db('cars')
            res.status(200).json(results);
    }
    catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const results = await db('cars').where({ id }).first();
        if (results) {
            res.status(200).json(results);
        }
        else {
            res.status(404).json({ error: 'ID not found' });
        }
    }
    catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const body = req.body;
    try {
        const added = await db('cars').insert(body).into('cars');
            if (added) {
                res.status(201).json({ message: 'Successfully Added', added });
            }
            else {
                res.status(400).json({ error: 'Check required information and retry' });
            }
    }
    catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const updated = await db('cars').where({ id }).update(body);
            if (updated) {
                res.status(200).json({ message: 'Information Updated', updated });
            }
            else {
                res.status(404).json({ error: 'ID not found' });
            }
    }
    catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    const {id} = req.params;
    try {
        const removed = await db('cars').where({ id }).del();
        if (removed) {
            res.status(200).json({ message: 'Successfully Removed', removed });
        }
        else {
            res.status(404).json({ error: 'ID not found' });
        }
    }
    catch (error) {
        next(error);
    }
});


//error handling
const errorHandler = ((error, req, res, next) => {
    res.status(500).json({ message: 'Server Error: Check Required Information and Retry', error });
    next();
});

router.use(errorHandler);

module.exports = router;