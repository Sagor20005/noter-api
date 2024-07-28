const express = require('express');
const router = require("./NoterRoutes")
const cors = require('cors')
//const router = new express.Router()
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(2000,(Error)=>{
  if(!Error){
    console.log("server is runing at Port : 2000")
  }
})