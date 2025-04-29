const express=require('express')

const router = express.Router();

const starterRouter=require('./starterRouter')
const mainCourseRouter=require('./mainCourserouter')
const dessertsRouter=require('./dessertsRouter')
const beveragesRouter=require('./beveragesRouter')



router.use('/starters',starterRouter)
router.use('/main-course',mainCourseRouter)
router.use('/desserts',dessertsRouter)
router.use('/beverages',beveragesRouter)










module.exports=router;
