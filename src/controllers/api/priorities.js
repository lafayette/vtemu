const _ = require('lodash')
const v = require('korrekt')
const express = require('express')
const log = require('../../log')(__filename)

const router = express.Router()

module.exports = router

router.put('/exec.do', async (req, res) => {
  const validator = v.create(v.array(v.required(v.object({
    groupId: v.required(v.number({ min: 1 })),
    taskId: v.required(v.number({ min: 1 })),
    userId: v.required(v.number({ min: 1 })),
    priority: v.required(v.number()),
  }))), { min: 1 })

  try {
    await validator(req.body)
  } catch (e) {
    log.warn('Bad request %o', e)
    res.status(400).send()
    return
  }

  setTimeout(() => {
    res.status(200).json([]) // TODO
  }, _.random(100, 1000))
})
