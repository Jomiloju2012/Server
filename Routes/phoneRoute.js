import {Router } from 'express';  
import { createPhone,getPhone,updatePhone,deletePhone,getPhoneById  } from '../controllers/phoneController.js';     
  

const phoneRouter = Router();

phoneRouter.post('/', createPhone); 
phoneRouter.get('/', getPhone);
phoneRouter.put('/:id', updatePhone);
phoneRouter.delete('/:id', deletePhone);
phoneRouter.get('/:id', getPhoneById);


export default phoneRouter;

