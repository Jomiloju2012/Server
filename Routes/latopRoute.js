import {Router } from 'express';  
import { createLaptop,getLaptop,updateLaptop,deleteLaptop,getLaptopById  } from '../controllers/laptopContoller.js'     

const laptopRouter = Router();

laptopRouter.post('/', createLaptop); 
laptopRouter.get('/', getLaptop);
laptopRouter.put('/:id', updateLaptop);
laptopRouter.delete('/:id', deleteLaptop);
laptopRouter.get('/:id', getLaptopById);



export default laptopRouter;
