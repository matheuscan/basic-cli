let Command = require('./Command.js')

class Echo extends Command {
    
    constructor(name, description){
        super (
            name = "echo",
            description = "Prints something on screen"
        )
        
    }
    static echo(arr){
        let str = "";
        for(let i = 1; i<arr.length;i++){
            str += arr[i] + " "
        }
        console.log(str)
    }
    
}
module.exports = Echo