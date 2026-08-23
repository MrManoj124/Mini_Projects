import React from "react";

export const resetPassword = async(req,res) => {
    try{
        const{token, password}=req.body;

        if(!isValidPassword(password)){
            return res.status(400).json({
                success : false,
                message : 'Password must be at least 6 characters'
            });
        }

        const user =  await User.findOne({
            resetPasswordToken : token,
            resetPasswordExpires : {$gt:Date.now()}
        });

        if(!user) {
            return res.status(400).json({
                success : false,
                message : 'Invalid or expired reset token'
            });
        }

        
    }
    
};