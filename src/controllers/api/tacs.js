const _ = require('lodash')
const v = require('korrekt')
const express = require('express')
const log = require('../../log')(__filename)

const router = express.Router()

module.exports = router

router.put('/campaigns/:campaign/applications/by/syncId/remove.do', async (req, res) => {
  const paramsValidator = v.create({
    campaign: v.required(v.number({ min: 1 }))
  })

  const validator = v.create({
    clientIdentifiers: v.required(
      v.array(v.object({
        guid: v.required(v.number({ min: 1 }))
      }), { min: 1 }),
    ),
  })

  try {
    await paramsValidator(req.params)
    await validator(req.body)
  } catch (e) {
    log.warn('Bad request %o', e)
    res.status(400).send()
    return
  }

  res.status(200).send()
})

router.post('/campaigns/:campaign/exec.do', async (req, res) => {
  const paramsValidator = v.create({
    campaign: v.required(v.number({ min: 1 }))
  })

  const validator = v.create({
    clients: v.required(
      v.array(v.object({
        clientIdentifiers: v.object({
          guid: v.required(v.number({ min: 1 }))
        })
      }), { min: 1 }),
    ),
  })

  try {
    await paramsValidator(req.params)
    await validator(req.body)
  } catch (e) {
    log.warn('Bad request %o', e)
    res.status(400).send()
    return
  }

  res.status(200).send()
})
