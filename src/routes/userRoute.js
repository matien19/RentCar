import  Express  from "express";
const router = Express.Router();


import { Register, Login , getUsers , } from "../controller/Users.js";
import { verifyToken } from "../middleware/Verify_Token.js";
// import { refreshToken} from "../controller/RefreshToken.js";

router.get('/users',getUsers ,(req,res) => {
    return res.json({status:"sukses", name: req.name})
});
router.post('/register',Register);
router.post('/login',Login);
// router.delete('/logout',Logout);
// router.get('/token',refreshToken);




export default router;