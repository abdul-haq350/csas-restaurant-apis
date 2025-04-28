const express=require('express')

const router = express.Router()

router.get('/biryani',(req,res)=> {
    res.send("Mashallah,Your Biryani is Awesome")
})

router.get('/gulab-jamoon',(req,res)=> {
    res.send("Mashallah,you are as sweet as  gulab jamoon")
})
router.get('/chai',(req,res)=> {
    res.send("Alhamdulillah! Wah Abdul Haq Wah,")
})
module.exports=router;
