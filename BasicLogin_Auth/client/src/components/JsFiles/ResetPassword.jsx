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

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        user.resetPasswordToken = undefined;
        user.reserPasswordExpires = undefined;
        await user.save();

        res.json({
            success : true,
            message : 'Password reset successful. You can now login with your new password.'
        });
    }
    catch(error){
        console.error('Reset password error:', error);
        res.status(500).json({
            success:false,
            message:'Server error'
        });
    }
};