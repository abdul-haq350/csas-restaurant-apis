const express=require('express')

const router = express.Router();

router.get('/haraChicken',(req,res)=> {
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

module.exports=router;