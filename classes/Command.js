class Command {
    constructor(name,description, parameters){
        this.name = name
        this.description = description
        this.parameters = parameters

        if(!parameters) this.parameters = ""
    }

    
    help(){
        let display = `Command Name: ${this.name},     Description: ${this.description}
        `
        console.log(display)
        if(this.parameters){
            for(let obj in this.parameters){
                console.log(`${obj}:    ${this.parameters[obj]}`)
            }
        }
    }
}
module.exports = Command