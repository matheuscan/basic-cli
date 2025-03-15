const Command = require('./Command')
const Echo = require('./Echo')
const Scrape = require('./Scrape')


class Program {
    #cmds = /echo|mkproject|scrape/i
    #pattern = new RegExp(this.#cmds)
    exec(){
        let line = this.#cleanArgv(process.argv)
        let matches = this.#cmds.exec(line[0])
        let scrape = new Scrape()
        let argument = line[1]
        if (matches.input === "echo"){
            Echo.echo(line)
        }
        else if (matches.input === "scrape"){
            if (argument){
                scrape.scrape(argument)
            }else{
                scrape.help()
            }
        }
    }
    #cleanArgv(list){
        let args = []
        list.map((e,i=2) => {
            if (i > 1) args.push(e)
         })
        return args
    }
}
module.exports = Program