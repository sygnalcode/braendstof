const router = require('express').Router()
const Snack = require('../models/Snack')

router.get('/', (req, res) => {
  Snack.find()
    .then(snacks => res.json(snacks))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Snack.find({ id: req.params.id })
    .then(snacks => res.json(snacks))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Snack.create(req.body)
    .then(snack => res.json(snack))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Snack.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(snack => res.json(snack))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Snack.findByIdAndDelete(req.params.id)
    .then(snack => res.json(snack))
    .catch(err => res.json(err))
})

module.exports = router
