import User from "../../models/User.js";

export default async (req, res, next) => {
    const verify_code = req.params.verify_code
    try {
        const user = await User.findOne({ verify_code });
    
        if (!user) {
          return res.status(404).json({ message: 'Invalid verification code.' });

        }else if ( user.verified )
        return res.status(404).json("User already verified")

        else{
        user.verified = true;
        user.role = 1;
        await user.save();
        }
    
        return res.status(200).json({ message: 'Account verified successfully.' });
        
      } catch (error) {
        next(error);
      }
    }

/*
import User from "../../models/User.js";

const verify_email =  async(req,res) => {
    
    try{
        const { verify_code } = req.params
        const email = req.body
        const user = await User.findOne({ email })

        if (verify_code !== user.verify_code) {
            return res.status(404).json("Mail Verification failed")
        }else if ( verified )
            return res.status(404).json("User already verified")

        else{
            user.verified = true
            await user.save()
    
            return res.redirect('http://localhost:5173/signin')

        }



    }catch(error){
        console.log(error)
        res.status(500).json(error.message)
    }
} 

export default verify_email
*/

/*
import User from "../../models/User.js";

let verify_email = async (req, res, next) => {

    try {

        let verifyCode = req.params

        let user = await User.findOne({ verify_code: verifyCode })
        if (user?.verify_code !== verifyCode) {
            return res.status(404).json({
                response: null,
                success: false,
                message: "Verify code invalid or has expired"
            })
        }
        
        user.verified = true
        //user.verify_code = null
        await user.save();
        return res.redirect("http://localhost:5173/signin")
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          response: null,
          success: false,
          message: "Error trying to verify this email",
        }); 
    }

}

export default verify_email;
*/