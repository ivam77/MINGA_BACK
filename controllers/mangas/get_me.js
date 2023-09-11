export default async (req, res, next) => {
    try {
        let user = req.user
        if(!user){
            return res.status(404).json({
                message: "User not found"
            })
        }
        return res.status(201).json({
            user
        })
        
    } catch (error) {
        return next(error);
    }
}
