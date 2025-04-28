const express=require("express")
const app = express()

const routes = require("./router/index")


app.use('/',routes);
app.listen(3000,()=>{console.log('server listening on port no: 3000}')})

