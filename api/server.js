// build your server here
const express = require('express')
const helmet = require('helmet')

const ProjectRouter = require('./project/router')
const ResourceRouter = require('./resource/router')
const TaskRouter = require('./task/router')

const server = express();

server.use(helmet())
server.use(express.json())

server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/projects', TaskRouter)


module.exports = server