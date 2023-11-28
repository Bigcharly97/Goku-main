import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['593960070183', 'GK97', true],
  ['593960070183', 'GK97', true],
  ['593960070183', 'GK97', true]
] //Numeros de owner 

global.mods = ['593960070183'] 
global.prems = ['593960070183', '593960070183', '593960070183']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'ʙɪɢ  ᴄʜᴀʀʟʏ ┃ᴮᴼᵀ' 
global.author = '@BIG_CHARLY__' 
global.fgig = '▢ https://www.instagram.com/big_charly__\n' 
global.dygp = 'https://chat.whatsapp.com'
global.fgsc = 'https://github.com' 
global.fgyt = 'https://youtube.com'
global.fgpyp = 'https://paypal.com'
global.fglog = 'https://i.imgur.io/CqJzm9x.png' 

global.wait = '*Cargando...*\n*▰▰▰▱▱▱▱▱*'
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
