'use strict'

require('dotenv').config()
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')

const app = express()
app.set('port', process.env.PORT || 5000)

app.use(compression())
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('*', async (req, res, next) => {
	res.status(404)
	next(new Error('page not found'))
})

app.use(async (err, req, res, next) => {
	const statusCode = res.statusCode || 500
	res
		.status(statusCode)
		.json({ error: err.message })
})

module.exports = app
