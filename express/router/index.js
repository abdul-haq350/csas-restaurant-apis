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

router.get('/chai',(req,res)=> {
    res.send("Alhamdulillah! Wah Abdul Haq Wah,")
})

router.get('/HaraChicken',(req,res)=> {
    res.send("Mashallah,Your Hara Chicken is Mind Blowing")
})

router.get('/Chicken65',(req,res)=> {
    res.send("Mashallah,Your Chicken 65 is Awesome")
})

router.get('/LaalChicken',(req,res)=> {
    res.send("Mashallah,Your Laal Chicken is Perfect")

})

router.get('/ChilliChicken',(req,res)=> {
    res.send("Mashallah,Your Chilli Chicken is Delicious")
})

router.get('/ButterChicken',(req,res)=> {
    res.send("Mashallah,Your Butter Chicken is Crazy")
})

router.get('/Soda',(req,res)=> {
    res.send("Mashallah,Soda is very sparkling")
})


module.exports=router;
