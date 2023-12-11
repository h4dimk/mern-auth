import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send({ message:"hey"})
})
router.post('/update/:id',verifyToken,updateUser)



export default router;