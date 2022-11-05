const router = require('express').Router();
const {getData, postData,updateData,deleteData,getParticularData,updateData2} = require('../controller/user');

// get all data 
router.get('/users', getData)

//post data
router.post('/users', postData)

//update particular data
router.patch('/users/:id', updateData)

router.put('/users/:id', updateData2)

//delete particular data
router.delete('/users/:id', deleteData)

//get particular data
router.get('/users/:id', getParticularData)

module.exports = router