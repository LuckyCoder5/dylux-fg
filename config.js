import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['59172945992', 'FG98', true],
  ['5493885839638'], 
  ['5492622689586'] 
] //Numeros de owner 

global.mods = ['573125484672'] 
global.prems = ['50489079501', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  males: 'https://malesin.xyz'

}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.herokuapp.com': 'fg-dylux'
}

// Sticker WM
global.packname = 'DyLux┃ᴮᴼᵀ' 
global.author = '@fg98._' 
global.igfg = '▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98._\n' 
global.dygp = 'https://chat.whatsapp.com/IO9jmpI72ejHiN4unRZleU'
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
