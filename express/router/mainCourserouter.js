const express=require('express')

const router = express.Router();

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





module.exports=router;