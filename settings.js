//base by DGXeon
//recode by CaxzyOffc 
//YouTube: @LynnZxD


const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "gada" //ur yt chanel name
global.socialm = "gada" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'anjaszz' //ur bot name
global.ownernumber = '6287860196317' //ur owner number
global.ownername = 'ANJAZzzzzzzzzzzz' //ur owner name
global.websitex = "https://youtu.be/dQw4w9WgXcQ?si=QU2gaeS2dvOOGKd2/" //"https://youtu.be/dQw4w9WgXcQ?si=QU2gaeS2dvOOGKd2"
global.wagc = "https://youtu.be/dQw4w9WgXcQ?si=QU2gaeS2dvOOGKd2" //"https://youtu.be/dQw4w9WgXcQ?si=QU2gaeS2dvOOGKd2"
global.themeemoji = '🪀'
global.wm = "LynnZxD"
global.botscript = 'https://youtu.be/dQw4w9WgXcQ?si=QU2gaeS2dvOOGKd2' //'https://youtu.be/dQw4w9WgXcQ?si=QU2gaeS2dvOOGKd2' //script link
global.packname = "Yuta MD"
global.author = "anjas - Pack"
global.creator = "6287860196317@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285362042405"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})