const express=require('express')

const router = express.Router();

router.get('/gulabjamoon',(req,res)=> {
    res.send("Mashallah,you are as sweet as  gulab jamoon")
})

router.get('/shahi-tukda',(req,res)=> {
    res.send("Mashallah,you are as sweet as  shahi-tukda")
})

router.get('/Fruit-ka-meetha',(req,res)=> {
    res.send("Mashallah,you are as sweet as  Fruit-ka-meetha")
})

router.get('/gajjar-ka-halwa',(req,res)=> {
    res.send("Mashallah,you are as sweet as  gajjar-ka-halwa")
})

router.get('/beetroot-ka-halwa',(req,res)=> {
    res.send("Mashallah,you are as sweet as  beetroot-ka-halwa")
})

router.get('/sheerkhorma',(req,res)=> {
    res.send("Mashallah,you are as sweet as  sheerkhorma")
})

router.get('/qurbani-ka-meetha',(req,res)=> {
    res.send("Mashallah,you are as sweet as  qurbani-ka-meetha")
})

module.exports=router;