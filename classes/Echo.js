let Command = require('./Command.js')

class Echo extends Command {
    
    constructor(name, description){
        super (
            name = "echo",
            description = "Prints something on screen"
        )
        
    }
    echo(str){
        console.log(str)
    }
    
}
module.exports = Echo