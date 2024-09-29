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
    update.available = req.body.available
    await update.save()
})

router.delete('/:id' , async (req, res) => {
    const deleteShow = await Show.findByPk(req.params.id)
    await deleteShow.destroy()
})

router.get("/genre", async (req, res) => {
    const shows = await Show.findAll({ where: { genre: req.query.genre } });
    res.json(shows);
  });

  module.exports = router