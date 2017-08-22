module.exports = app => {
  // app.get('/json', app.jsonp({ callback: 'callback' }), app.controller.json.index)
  app.get('/report', app.controller.report.index)
  app.get('/click', app.controller.click.index)
}