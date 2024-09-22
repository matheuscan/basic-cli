#! /usr/bin/env node
const pkg = require('../package.json')
const PouchDB = require('pouchdb')
const Program = require('../classes/Program')


let p  = new Program()
p.exec()