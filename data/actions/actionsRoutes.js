const express = require('express')
const Actions = require('./actionController')
const {validateActionId , validateAction} = require('../helpers/validation')
const router = express.Router()

router.get('/:actionId',validateActionId, Actions.GetAction)
router.post('/', validateAction, Actions.AddAction)
router.put('/:actionId', validateActionId, validateAction, Actions.UpdateAction)
router.delete('/:actionId', validateActionId, Actions.DeleteAction)

module.exports = router