const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../models')

// The `/api/tags` endpoint

router.get('/tags', (req, res) => Tag.findAll()
  .then(tag => res.json(tag))
  .catch(err => console.log(err)))

router.get('/tags/:id', (req, res) => Tag.findOne({ where: { id: req.params.id } })
  .then(category => res.json(category))
  .catch(err => console.log(err)))

router.post('/tags', (req, res) => Tag.create(req.body)
  .then(category => res.json(category))
  .catch(err => console.log(err)))

router.put('/tags/:id', (req, res) => Tag.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

router.delete('/tags/:id', (req, res) => Tag.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
