const Express = require('express')
const Router = Express.Router()

const Projects = require('./projectController')
const {validateProjectId ,validateProject} = require('../helpers/validation')

Router.get('/:id',validateProjectId, Projects )
Router.get('/:id/actions', validateProjectId ,Projects)
Router.post('/' , validateProject, Projects)
Router.put('/:id',validateProjectId, validateProject , Projects)
Router.delete('/:id', validateProjectId, Projects)

module.exports= Router