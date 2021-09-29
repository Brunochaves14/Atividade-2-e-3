const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extends:true})) 
app.post('/usuarios', (req, resp) =>{
    console.log(req.body)
    console.log(req.query)
    resp.send ('<h1> Parabéns, formulário incluido com sucesso. </h1>')
})

app.listen(3003)