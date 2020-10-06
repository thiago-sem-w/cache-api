'use strict'

const mcache = require('memory-cache')

module.exports = async (req, res, next) => {
	const key = '__express__' + req.url
	const cached = mcache.get(key)
	if (cached) {
		return res.json(cached)
	}
	res.sendResponse = res.json
	res.json = async (body) => {
		mcache.put(key, body, 3000)
		res.sendResponse(body)
	}
	next()
}
