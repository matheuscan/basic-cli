const Command = require('./Command')
const Echo = require('./Echo')

class Program {
    #cmds = /echo|mkproject/i
    #pattern = new RegExp(this.#cmds)
    exec(){
        let line = this.#cleanArgv(process.argv)
        let matches = this.#cmds.exec(line[0])
        console.log(matches)
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