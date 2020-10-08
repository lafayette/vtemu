const _ = require('lodash')
const v = require('korrekt')
const express = require('express')
const log = require('../../log')(__filename)

const router = express.Router()

module.exports = router

router.post('/exec.do', async (req, res) => {
  const validator = v.create({
    clients: v.required(
      v.array(v.object({
        uuid: v.required(v.number({ min: 1 }))
      }), { min: 1 }),
    ),
  })

  try {
    await validator(req.body)
  } catch (e) {
    log.warn('Bad request %o', e)
    res.status(400).send()
    return
  }

  const clients = req.body.clients.map(client => {
    return {
      uuid: client.uuid,
      result: 'Success',
      createdClientId: Date.now()
    }
  })

  res.json({
    createResult: clients
  })
})
