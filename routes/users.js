const express = require('express');
const router = express.Router();
const {User, Show} = require('../models/index');

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
});

router.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json(user)
})

router.get('/:id/shows' , async (req, res) => {
    const user = await User.findByPk(req.params.id)
    const userShow = await user.getShows()
    res.json(userShow)
})

router.put("/:userId/shows/:showId" , async (req, res) => {
    const user = await User.findByPk(req.params.userId)
    const show = await Show.findByPk(req.params.showId)
    await user.addShow(show)
})

module.exports = router