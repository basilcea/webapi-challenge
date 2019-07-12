const Express = require('express')
const Router = Express.Router()

const Projects = require('./projectController')
const {validateProjectId ,validateProject} = require('../helpers/validation')

Router.get('/:id',validateProjectId, Projects.GetProject )
Router.get('/:id/actions', validateProjectId ,Projects.GetProjectsActions)
Router.post('/' , validateProject, Projects.AddProject)
Router.put('/:id',validateProjectId, validateProject , Projects.UpdateProject)
Router.delete('/:id', validateProjectId, Projects.DeleteProject)

module.exports= Router