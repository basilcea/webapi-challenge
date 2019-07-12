const Express = require('express')

const Router = Express.Router()

const Actions = require('./actionController')
const {validateActionId , validateAction} = require('../helpers/mappers')

Router.get('/:actionId',validateActionId, Actions)
Router.post('/', validateAction, Actions)
Router.update('/:actionId', validateActionId, validateAction, Actions)
Router.delete('/:actionId', validateActionId, Actions)