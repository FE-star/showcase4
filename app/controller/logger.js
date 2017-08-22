const Logger = require('egg-logger').Logger
const FileTransport = require('egg-logger').FileTransport
const ConsoleTransport = require('egg-logger').ConsoleTransport

const logger = new Logger()
logger.set('file', new FileTransport({
  file: './logs/report.log',
  level: 'INFO',
}))

module.exports = logger