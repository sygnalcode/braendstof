const router = require('express').Router()
const SnackTags = require('../models/SnackTags')

router.get('/', (req, res) => {
  SnackTags.find()
    .then(snacktags => res.json(snacktags))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  SnackTags.find({ id: req.params.id })
    .then(snacktags => res.json(snacktags))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  SnackTags.create(req.body)
    .then(snacktag => res.json(snacktag))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  SnackTags.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(snacktag => res.json(snacktag))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  SnackTags.findByIdAndDelete(req.params.id)
    .then(snacktag => res.json(snacktag))
    .catch(err => res.json(err))
})

module.exports = router
