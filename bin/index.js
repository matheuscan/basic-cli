#! /usr/bin/env node
const pkg = require('../package.json')
const PouchDB = require('pouchdb')
const Parser = require('../classes/Parser')


let p  = new Parser()
p.exec()