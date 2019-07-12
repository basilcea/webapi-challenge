const Express = require('express')

const Router = Express.Router()

const Actions = require('./actionController')
const {validateActionId , validateAction} = require('../helpers/mappers')

Router.get('/:id',validateActionId, Actions)
Router.post('/', validateAction, Actions)
Router.update('/:id', validateActionId, validateAction, Actions)
Router.delete('/:id', validateActionId, Actions)