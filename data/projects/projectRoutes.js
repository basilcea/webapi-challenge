const express = require('express')
const router = express.Router()

const Projects = require('./projectController')
const {validateProjectId ,validateProject} = require('../helpers/validation')
router.get('/', Projects.GetProjects )
router.get('/:id',validateProjectId, Projects.GetProject )
router.get('/:id/actions', validateProjectId ,Projects.GetProjectsActions)
router.post('/' , validateProject, Projects.AddProject)
router.put('/:id',validateProjectId, validateProject , Projects.UpdateProject)
router.delete('/:id', validateProjectId, Projects.DeleteProject)

module.exports= router