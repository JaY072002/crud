const User = require('../models/users');  //user schema
const bcrypt = require('bcrypt')

const getData = async(req,res) => {
    try {
        const result = await User.find() //return array of object
        
        res.status(200).send(result)

    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
}

const postData = async(req,res) => {
    try {
        const pwd = await bcrypt.hash(req.body.password,10)

        const newUser = new User({
            name : req.body.name,
            email : req.body.email,
            password : pwd
        });
        const result = await newUser.save();

        res.status(200).send(result)
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}


const updateData = async(req,res) => {
    try {
        const _id = req.params.id
        const result = await User.findByIdAndUpdate(_id, req.body , {
            new :true
        })
        res.status(200).send(result)

    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}

const updateData2 = async(req,res) => {
    try {
        const _id = req.params.id;
        const result = await User.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.status(200).send(result)
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}


const deleteData = async(req,res) => {
    try {
        const _id = req.params.id;
        const result = await User.findByIdAndDelete(_id)
        res.status(200).send(result)

    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}



const getParticularData = async(req,res) => {
    try {
        const _id = req.params.id;
        const result = await User.findById(_id)
        res.status(200).send(result);

    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
}
 

module.exports = {
    getData,
    postData,
    updateData,
    deleteData,
    getParticularData,
    updateData2,
}