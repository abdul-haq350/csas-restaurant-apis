const express=require("express")
const app = express()

const routes = require("./router/index")

app.listen(3009, ()=> {console.log("We are listening at port 3009!")})

