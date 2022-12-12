bla = process.cwd()

var fs = require('fs')
var hx = require('hxz-api');
var axios = require('axios')
var zrapi = require('zrapi')
var jpeg = require('jpeg-js')
var gimage = require('g-i-s')
var yts = require('yt-search')
var multer = require('multer')
var Ddos = require('ddos')
var express = require('express')
var request = require('request');
var cheerio = require('cheerio');
var fetch = require('node-fetch')
var FormData = require('form-data')
var canvacord = require("canvacord")
var canvasx = require('discord-canvas')
var { fromBuffer } = require('file-type')
var aexm = require('@lolikillers/aexm-api');
var gerarnick = require('./lib/gerarnick.js')
var { mediafireDl } = require('./lib/mediafire.js');
var buffer = require('./lib/upload.js')
var exec = require('child_process').exec;
var { Maker } = require('imagemaker.js')
var download = require('@phaticusthiccy/open-apis')
var thiccysapi = require('textmaker-thiccy');
var { pinterest } = require('./lib/funções.js')
var wiki = require("@dada513/wikipedia-search")
var { ytplay3 } = require('./lib/yt-down/lib/yt.js')
var trans = require('@vitalets/google-translate-api')

cors = require('cors')

const PORT = process.env.PORT || 3000
var { color } = require('./lib/color.js')

//var knights = require("knights-canvas");
//"knights-canvas": "^1.0.0",
//var nsfw = require('nsfwjs')
//"nsfwjs": "^2.4.1",

var { ytMp3, ytMp4, ytPlay, ytPlayMp4, ytSearch} = require('./lib/yt.js')

var { ytMp3_2, ytMp4_2, ytPlay_2 } = require('./youtubev2.js')

const { y2mateV, y2mateA, wikiSearch, jagoKata} = require('./lib/y2mate');

const { aiovideodl, umma, ytPlay_3} = require('./scraper-2.js');

const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3} = require('./youtube.js')

var translate = (text, lang) => { return new Promise(async (resolve, reject) => { trans(text, { conn: 'gtx', to: lang }).then((res) => resolve(res.text)).catch((err) => reject(err)) });}

async function getBuffer(url) {
he = await fetch(url)
.then(c => c.buffer())
return he
}


var ddos = new Ddos({burst:4,limit:30,testmode:true,whitelist:['177.200.119.217']});

/////\\\\

var key = ["izanami2022", "izanami"] 

/////\\\\
const router = express.Router();

var upload = multer()

var app = express()

app.use(cors())
app.set("json spaces",2)
app.use(express.static("public"))

////PAGINA INICIAL Q IRA REDIRECIONAR PRA /DOC
 
router.use(ddos.express);
router.get("/", (req,res,next) => {
console.log("Beep");
res.end("Boop");
})
app.use(router);
 
app.get('/api/keyerrada',(req, res) => {
apikey = req.query.apikey
if(!key.includes(apikey)) {
return res.json({status:false,msg:'apikey invalida, adquira a sua comigo : https://wa.me/558198923680'})
} else {
return res.json({status:false, msg:'Apikey Funcionando perfeitamente ✔️'})
}})

app.get('/welcome', async (req, res, next) => {
if (!req.query.titulo) return res.json({ status: 404, error: 'Insira o parametro: titulo'})
if (!req.query.nome) return res.json({ status: 404, error: 'Insira o parametro: nome'})
if (!req.query.perfil) return res.json({ status: 404, error: 'Insira o parametro: perfil'})
if (!req.query.fundo) return res.json({ status: 404, error: 'Insira o parametro: fundo'})
if (!req.query.grupo) return res.json({ status: 404, error: 'Insira o parametro: grupo'})

let welcomer = await new canvasx.Welcome()
.setUsername(req.query.nome)
.setDiscriminator("2022")
.setText("title", req.query.titulo)
.setText("message", req.query.grupo)
.setAvatar(req.query.perfil)
.setColor('border', '#00100C')
.setColor('username-box', '#00100C')
.setColor('discriminator-box', '#00100C')
.setColor('message-box', '#00100C')
.setColor('title', '#00FFFF')
.setBackground(req.query.fundo)
.toAttachment()
let base64 = `${welcomer.toBuffer().toString('base64')}`
require('fs').writeFileSync('welkom.png', base64, 'base64')
res.sendFile(bla+'/welkom.png')
})

app.get('/api/eletronica1.mp3', (req, res) => {
json = fs.readFileSync('./lib/audios/eletronica.mp3')
res.type('mp3')
res.send(json)
})

app.get('/loli', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/hentai', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/hentai.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/porno', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/porno.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/shota', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/+18/loli', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/nsfwlolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/api/pinterest', (req, res) => {
(async() => {
apikey = req.query.apikey
text = req.query.text
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
if (!text) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro text?"})
pin = await pinterest(text)
ac = pin[Math.floor(Math.random() * pin.length)]
res.type('jpg')
res.send(await getBuffer(ac))
})()
})

app.get('/api/test5', async (req, res) => {
text = req.query.text
if(!text) return res.json({msg: 'Cade o parametro text?'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
download.glowtext({text: text, font_style: "discodiva", font_size: "s"})
.then(async (data) => {
res.send(data)
});
})

app.get('/api/fazernick', async (req, res) => {
apikey = req.query.apikey  
let nome = req.query.nome || res.json({msg: 'insira o parâmetro: ?nome='})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
await gerarnick(nome)
.then(nicks => {
res.send(nicks) 
})
})

app.get('/api/facebook', async (req, res, next) => {
apikey = req.query.apikey
link = req.query.link
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
if (!link) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro link?"})
fbdown(link)
.then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})

app.get('/api/instagram', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
if (!url) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro url?"})
aexm.igdl(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})

app.get('/api/mediafire', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
if (!url) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro url?"})
mediafireDl(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})

app.get('/api/wallpaper',(req,res) => {
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
gimage(`Wallpaper`, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
msg:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
})
})

app.get('/api/twitter', async (req, res, next) => {
apikey = req.query.apikey
link = req.query.link
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
if (!link) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro link?"})
aexm.twitter(link)
.then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})

app.get('/api/tiktok',  async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
aexm.ttdownloader(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})

app.get('/api/tiktok-2', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
download.tiktok(url).then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})

// LOGOS 2 TEXTO

app.get('/api/marvel', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/pornhub', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/space',  async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!texto2) return res.json({status:false,msg:'cade o parametro texto2'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/stone', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/steel', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/3d-steel-text-effect-877.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/grafity', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/glitch3', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/america', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})


// LOGOS 1 TEXTO

app.get('/api/angelwing', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/hackneon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/fpsmascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/equipemascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/make-team-logo-online-free-432.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/txtquadrinhos', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/ffavatar', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-free-fire-avatar-online-572.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/ffbanner', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/mascotegame', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/mascoteavatar', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-avatar-mascot-style-364.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/wingeffect', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/angelglx', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/wings-galaxy-206.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/gizquadro', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/writing-chalk-on-the-blackboard-30.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/blackpink', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/girlmascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/logogame', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/romantic', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/fire', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/smoke', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/papel', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/narutologo', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/lovemsg', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/lovemsg2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/lovemsg3', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/coffecup', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/coffecup2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/florwooden', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/madeira', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/gameplay', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/googlesg', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
texto3 = req.query.texto3;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!texto3) return res.json({msg: "Cade o parametro texto3"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/other-design/make-google-suggestion-photos-238.html", [`${texto}`, `${texto2}`, `${texto3}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/neon2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/lobometal', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/harryp', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/cup', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/txtborboleta', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/shadow', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/cemiterio', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/metalgold', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/efeitoneon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Vinigdr Gay`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/transformer', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/glitch2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/glitch', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!texto2) return res.json({status:false,msg:'cade o parametro texto2'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})


app.get('/api/lapis', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/3dgold', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/halloween', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/lava', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/lava-text-effect-online-914.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/toxic', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/toxic-text-effect-online-901.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/demongreen', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/metalfire', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/hot-metal-text-effect-843.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/thunder', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/thunderv2', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/neongreen', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/green-neon-text-effect-874.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/neon', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/neon1', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/neon3d', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/rainbow', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/gelo', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/ice-cold-text-effect-862.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `ALeatory Ofc`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

// FIM LOGOS


app.get('/canvas/trigger',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('gif')
res.send(await canvacord.Canvas.trigger(url))
})() 
})

app.get('/canvas/phub',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, menssagem: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, menssagem: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
bla = { username: nome, message: msg, image:foto}
res.type('jpg')
res.send(await canvacord.Canvas.phub(bla))
})()
})

app.get('/canvas/youtube',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, menssagem: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, menssagem: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
bla = { username: nome, content: msg, avatar: foto, dark:false }
res.type('jpg')
res.send(await canvacord.Canvas.youtube(bla))
})()
})

app.get('/canvas/wasted',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.wasted(url))
})()
})

app.get('/canvas/invert',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.invert(url))
})()
})

app.get('/canvas/lgbt',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.rainbow(url))
})()
})

app.get('/canvas/procurado',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.wanted(url))
})()
})


app.get('/canvas/delete',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.delete(url))
})()
})

app.get('/canvas/hitler',(req, res) => {
(async() => {
 url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.hitler(url))
})()
})

app.get('/canvas/trash',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('gif')
res.send(await canvacord.Canvas.trash(url))
})()
})

app.get('/canvas/shit',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.shit(url))
})()
})

app.get('/canvas/blur',(req, res) => {
(async() => {
 url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.blur(url))
})()
})

app.get('/canvas/rip',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
  res.send(await canvacord.Canvas.rip(url))
})()
})

app.get('/canvas/jail',(req, res) => {
(async() => {
 url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.jail(url))
})()
})

app.get('/canvas/kiss',(req, res) => {
(async() => {
 url = req.query.url
url2 = req.query.url2
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!url2) return res.status(408).send({ status: 408, menssagem: 'Coloque a url2 no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
  res.type('jpg')
  res.send(await canvacord.Canvas.kiss(url, url2))
})()
})

app.get('/about',(req, res) => {
res.json({
status:true,
dono:'@Aleatory </>',
msg:'Projeto em beta'
})
})

app.get('/api/playstore',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
down.playstore(q)
.then(e => {
res.json({
status:true,
criador: '@Aleatory </>',
resultados: e
})
})
})

app.get('/api/telegraph',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
buffer(q)
.then(e => {
res.json({
status:true,
criador: '@Aleatory </>',
resultados: e
})
})
})

app.get('/api/ttp',  async (req, res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
cores = cor[Math.floor(Math.random() * (cor.length))]	 				 
fontes = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sitee = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cores}&text.0.font.family=${fontes}&text.0.background.color=ff0000`
res.type('jpg')
res.send(await getBuffer(sitee))
})

app.get('/api/fbdown',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
down.fbdown(url)
.then(e => {
res.json({
status:true,
criador: '@Aleatory',
resultado: e})
})
})

app.get('/api/photooxy',(req,res) => {
url = req.query.url
text = req.query.text
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
if(!text)return res.json({
status:false,
msg:'Cade o parametro text??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
photooxy(url, text)
.then(e => {
res.json({
status:true,
criador: '@Aleatory',
resultado: e})
})
})


app.get('/api/gimage',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
gimage(q, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
msg:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
})
})

app.get('/api/wallpaperanime',(req,res) => {
apikey = req.query.apikey
q = 'Wallpaper anime'
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
gimage(q, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
msg:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
})
})

app.get('/api/ssweb',async (req,res,next) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
fetch('https://mnazria.herokuapp.com/api/screenshotweb?url='+url, async(error, results) => {
if(error){
console.log(error)
res.json({
status:false,
msg:'Não encontrei o site'
})
} else { 
resultado = results
bala = await getBuffer(resultado.gambar)
res.type('jpg')
res.send(bala)
}
})
})

app.get('/api/avatar',(req,res,next) => {
fetch(encodeURI(`https://nekos.life/api/v2/img/avatar`))
.then(response => response.json())
.then(async (data) => {
resultado =  data
bala = await getBuffer(resultado.url)
res.type('jpg')
res.send(bala)
})
.catch(e => {
res.json({erro:'erro'})
})
})

app.get('/api/legenda',async (req,res,next) => {
url = req.query.url
texto1 = req.query.texto1
texto2 = req.query.texto2
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
if(!texto1)return res.json({
status:false,
motivo:'nao_tem_texto_1'
})
if(!texto2)return res.json({
status:false,
motivo:'nao_tem_texto_2'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
bala = await getBuffer(`https://api.memegen.link/images/custom/${texto1}/${texto2}.png?background=${url}`)
res.type('jpg')
res.send(bala)
})

app.get('/api/github',(req,res,next) => {
pessoa = req.query.usuario
if(!pessoa)return res.json({
status:false,
motivo:'cade_o_usuario'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
fetch(encodeURI(`https://api.github.com/users/`+pessoa))
.then(response => response.json())
.then(date => {
gitData =  date;
res.json({
criador:"Aleatoryツ",
status:true,
resultado:{
username: gitData.login,
id: gitData.id,
Node_ID: gitData.node_id,
url: gitData.html_url,
local: (gitData.location == null) ? 'não_tem' : gitData.location,
bio: (gitData.bio == null) ? 'não_tem' : gitData.bio,
twitter:  (gitData.twitter_username == null) ? 'não_tem' : gitData.twitter_username,
seguidores: gitData.followers,
seguindo: gitData.following,
criado: gitData.created_at,
atualizado: gitData.updated_at,
procura_trabalho: (gitData.hireable == null) ? 'Não' : gitData.hireable,
Site: (gitData.blog == "") ? 'Não' : gitData.blog,
repositorios: gitData.public_repos,
admin_de_Site: (gitData.site_admin == false) ? 'Não' : gitData.site_admin,
tipo: gitData.type,
empresa: (gitData.company == null) ? 'Não' : gitData.company,
email: (gitData.email == null) ? 'Não' : gitData.email
} 
})
})
.catch(e => {
res.json({erro:e})
})
})

app.get('/api/tradutor',(req,res) => {
lang = req.query.lang
text = req.query.text
if(!lingua)return res.json({
status:false,
msg:'Cade o parametro lang??'
})
if(!text)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
translate(text, lang)
.then(re => {
    res.json({
status:true,
criador:'@Aleatory </>',
traducao: re
    })
}).catch(err => {
    console.error(err);
})
})

app.get('/api/wiki',(req,res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
wiki.search(`${texto}`, 'pt')
.then(async (wikip) => {
const wikis = await axiosapp.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip[0].pageid}`)
const getData = Object.keys(wikis.data.query.pages)

res.json({
status:true,
criador:'@Aleatory </>',
resultado:wikis.data.query.pages[getData].extract
    })
}).catch(err => {
    console.error(err);
})
})


//////YTS

app.get('/api/play', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytPlay(q)
.then(e => {
res.json(e)
})
})

app.get('/api/playv1', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytPlay_2(q)
.then(e => {
res.json(e)
})
})

app.get('/api/playv2', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytPlay_3(q).then(res => {
res.send(res)
})
})

app.get('/api/playmp4',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytPlayMp4(q)
.then(e => {
res.json({
status:true,
criador:'@Aleatory</>',
resultado:e
})
})
})

app.get('/api/playmp4-2',(req,res) => {
link = req.query.link
if(!link)return res.json({
status:false,
msg:'Cade o parametro link??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
hx.youtube(link)
.then(e => {
res.json({
status:true,
criador:'@Aleatory</>',
resultado:e
})
})
})

app.get('/api/ytsrc',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytSearch(q)
.then(e => {
res.json({
status:true,
criador:'@Aleatory</>',
resultado:e
})
})
})

app.get('/api/ytMp4',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytMp4(url)
.then(e => {
res.json({
status:true,
criador:'@Aleatory</>',
resultado:e
})
})
})


app.get('/api/ytMp3',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytMp3(url)
.then(e => {
res.json({
status:true,
criador:'Aleatory</>',
resultado:e
})
})
})

app.get('/api/ytMp3_2',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
aiovideodl(url)
.then(e => {
res.json({
status:true,
criador:'Aleatory</>',
resultado:e
})
})
})

app.get('/api/ytmp3-2', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
y2mateA(q).then(e => {
res.json(e)
})
})

app.get('/api/ytmp4-2', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
y2mateV(q).then(e => {
res.json(e)
})
})

////FUNÇAO DE PAGINA Q NAO TEM FUNÇÃO SOBRE ELA
app.get('*', function(req, res) {
res.status(404).json({
status:false,
msg: 'PAGINA NÃO ENCONTRADA'
})
})
 
//////MOSTRA SE O APP FOI ABERTO
app.listen(PORT, () => {
console.log('App aberto na porta: ' + PORT)
})


module.exports = app
