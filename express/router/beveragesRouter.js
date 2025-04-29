const express=require('express')

const router = express.Router();

router.get('/regularchai',(req,res)=> {
    res.send("Alhamdulillah! Wah regular chai,")
})
router.get('/Hyderabadichai',(req,res)=> {
    res.send("Alhamdulillah! Wah hyderbadin chai,")
})
router.get('/karakchai',(req,res)=> {
    res.send("Alhamdulillah! Wah karak chai,")
})
router.get('/masalechai',(req,res)=> { 
    res.send("Alhamdulillah! Wah Masale chai,")
})
router.get('/dumkichai',(req,res)=> {
    res.send("Alhamdulillah! Wah Dumki chai,")
})
router.get('/zafranichai',(req,res)=> {
    res.send("Alhamdulillah! Wah Zafrni Chai,")
})

router.get('/chai',(req,res)=> {
    res.send("Alhamdulillah! Wah Abdul Haq Wah,")
})


router.get('/Soda',(req,res)=> {
    res.send("Mashallah,Soda is very sparkling")
})

module.exports=router;