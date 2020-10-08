const _ = require('lodash')
const v = require('korrekt')
const express = require('express')
const log = require('../../log')(__filename)

const router = express.Router()

module.exports = router

router.post('/tokens.do', async (req, res) => {
  res.status(201).set('x-auth-token', 'VTEMU_XAUTH_TOKEN').send()
})
