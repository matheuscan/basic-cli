class Command {
    constructor(name,description, parameters){
        this.name = name
        this.description = description
        this.parameters = parameters

        if(!parameters) this.parameters = ""
    }
    help(){
        let display = `Command Name: ${this.name},     Description: ${this.description}, 

Options: ${this.parameters}
        `
        console.log(display)
    }
}
module.exports = Command