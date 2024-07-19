const { param } = require('../routes/reserve.routes');
const Reserve= require('./../models/Reserve')
const { request, response } = require('express')

const createReserve = async (req = request, res = response) => {
    const {email} = req.body;
    try {
        const user = await Reserve.findOne({email});
        if(user) {
            return res.status(400).json({
                ok: false,
                msg: 'Email is already exist in Database!!!'
            })
        }
        const dbUser = new User({
            email: email, 
        })
        await dbUser.save()
        return res.status(201).json({
            ok: true,
            msg: `User: ${email} created successfuly`
        })
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Please contact to support'
        })
    }
}

module.exports = {

}