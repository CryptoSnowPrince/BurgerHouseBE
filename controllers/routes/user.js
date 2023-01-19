let router = require('express').Router();
const mongoose = require('mongoose');
const UserSchema = require('../../models/user');

router.post('/create-user-info', async(req, res) => {
    try {
       const { ipAddress } = req.body;
        const _userInfo = new UserSchema({
            ipAddress
        });
        await _userInfo.save();
        res.status(200).json({
            message: "Your info is saved"
        });
        
    } catch(err) {
        res.status(400).json({
            error: "Your info is not saved"
        });
    }
});

module.exports = router;