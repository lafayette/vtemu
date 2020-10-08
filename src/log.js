const pino = require('pino')
const pretty = require('pino-pretty')
const path = require('path')

const logger = pino({
  // base: {
  //   pid: process.pid,
  //   hostname: null,
  // },
  // timestamp: false,
  // enabled: false,
  // time: () => {
  //   console.log('ARGS', new Date().toISOString())
  //   // return new Date().toISOString() + '111'
  //   return (new Date()).toISOString()
  // },
  level: 'trace',
  prettyPrint: {
    colorize: false,
    levelFirst: true,
    ignore: 'pid,hostname',
    // messageFormat: '{msg}',
    translateTime: 'yyyy-mm-dd HH:MM:ss',
    // customPrettifiers: {
    //   filename: path.basename(__filename)
    // }
  },
  prettifier: pretty,
})

const rootPath = __dirname

module.exports = function (fileName) {
  return logger.child({
    name: path.relative(rootPath, fileName)
  })
}
