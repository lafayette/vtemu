const express = require('express')
const log = require('./log')(__filename)

const PORT = 33000

const app = express()
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  log.debug('%s %s %s', req.method, req.url, JSON.stringify(req.body))
  req.url = req.url.replace(/[/]+/g, '/')
  next()
})

app.get('/', (req, res) => {
  res.send('VoipTime emulator')
})

app.use('/api/v1/clients', require('./controllers/api/clients'))
app.use('/api/v1/tacs', require('./controllers/api/tacs'))
// app.use('/api/v1/telemarketing', require('./controllers/api/telemarketing'))
app.use('/api/v1', require('./controllers/api/base'))

app.use((req, res) => {
  log.warn('Not found %s %s', req.method, req.url)
  res.status(404).send()
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
