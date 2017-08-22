const logger = require('./logger')

module.exports = app => {
  class ReportController extends app.Controller {
    * index(req) {
      const { ctx } = this
      const query = ctx.request.query
      logger.info(`[${new Date}]id=${query.id}&action=${query.action}`)
      ctx.status = 204
    }
  }
  return ReportController
}
  