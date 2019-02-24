const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const port = 3000


const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  
const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    console.log('Requested at: ' + req.requestTime)
    next()
  }
  
app.use(requestTime)
app.use(myLogger)
  
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
})


app.use('/', router);
app.listen(process.env.port || 3000)