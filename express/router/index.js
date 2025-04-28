const express=require('express')

const router = express.Router()

router.get('/MuttonBiryani',(req,res)=> {
    res.send("Mashallah,Your Mutton Biryani is Awesome")
})

router.get('/ChickenBiryani',(req,res)=> {
    res.send("Mashallah,Your Chicken Biryani is Awesome")
})

router.get('/FishBiryani',(req,res)=> {
    res.send("Mashallah,Your Fish Biryani is Awesome")
})

router.get('/PrawnsBiryani',(req,res)=> {
    res.send("Mashallah,Your Prawns Biryani is Awesome")
})

router.get('/MandiBiryani',(req,res)=> {
    res.send("Mashallah,Your Mandi Biryani is Awesome")
})

router.get('/gulabjamoon',(req,res)=> {
    res.send("Mashallah,you are as sweet as  gulab jamoon")
})
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
module.exports=router;
