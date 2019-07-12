const ProjectsRoutes = require('./data/projects/projectRoutes')
const ActionsRoutes = require('./data/actions/actionsRoutes')
const Express = require('express')


const router = Express.Router()

router.use('/:id/actions' ,ActionsRoutes)
router.use('/',ProjectsRoutes)

module.exports = {router}