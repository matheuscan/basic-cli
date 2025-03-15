const Command = require('./Command')
const Request = require('request')
const cheerio = require('cheerio')
const https = require('node:https')

class Scrape extends Command {
    constructor(name,description,parameters){
        super(
            name="Scrape",
            description= "scrapes data from a website",
        )
    }
    
    scrape(url){
        let conn  = https.get(`${url}`, function(res){
            let data = ''
            res.on('data', function(chunk){
                data += chunk
            })
            res.on('end', function(){
                let $ = cheerio.load(data)
                let body = $('h2 > *').text()
                console.log(body)
            })
        })

        
    }
}
module.exports = Scrape