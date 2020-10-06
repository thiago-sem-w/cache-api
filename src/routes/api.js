'use strict'

const { Router } = require('express')

const cache = require('../middlewares/cache')

const router = Router()

router.get('/', cache, async (req, res) => {
	setTimeout(() => res.json({ ping: 'pong' }), 5000)
})

module.exports = router
