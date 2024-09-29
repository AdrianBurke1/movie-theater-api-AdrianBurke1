const express = require('express');
const router = express.Router();
const {User, Show} = require('../models/index');

router.get('/' , async (req, res) => {
    const shows = await Show.findAll() 
    res.json(shows)
})

router.get('/:id', async (req, res) => {
    const shows = await Show.findByPk(req.params.id)
    res.json(shows)
})

router.get('/:id/users' , async (req, res) => {
    const show = await Show.findByPk(req.params.id)
    const userShow = await show.getUsers()
    res.json(userShow)
})

router.put('/:id' , async (req, res) => {
    const update = await Show.findByPk(req.params.id)
    await update.save()
})