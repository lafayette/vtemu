const _ = require('lodash')
const v = require('korrekt')
const express = require('express')
const log = require('../../log')(__filename)

const router = express.Router()

module.exports = router

router.get('/campaigns.do', async (req, res) => {
  const paramsValidator = v.create({
    limit: v.number(),
    offset: v.number(),
  })

  try {
    await paramsValidator(req.params)
  } catch (e) {
    log.warn('Bad request %o', e)
    res.status(400).send()
    return
  }

  res.status(200).json([]) // TODO
})

router.get('/campaigns/:campaign/taskId.json', async (req, res) => {
  const paramsValidator = v.create({
    campaign: v.required(v.number({ min: 1 }))
  })

  try {
    await paramsValidator(req.params)
  } catch (e) {
    log.warn('Bad request %o', e)
    res.status(400).send()
    return
  }

  res.status(200).json({
    taskId: _.random(1000, 9999)
  })
})
