#! /usr/bin/env node
const yargs = require('yargs')
//const chalk = require('chalk')
const pkg = require('../package.json')
const PouchDB = require('pouchdb')


yargs.scriptName('eco').usage('$0  <cmd> [args]')
   // .option('v',{alias: "version",describe: "Outputs the current version",type: "string", demandOption: false})
   //Creating a command for new databases
   .command('createpouch [dbname]','Creates a new PouchDB database',(yargs) => {
    //dbanme datatype, description, and if required default value
    yargs.positional('dbname', {
        type: 'string',
        describe: 'Name of the database to be created'
    })
   }, function (argv){
    //Dealing with input data provided by argv argument when calling the createpuch command
    let db = new PouchDB(argv.dbname)
    console.log(`Database created successfully!`)
    db.info()
   }) 
   .help(true).argv