import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import phoneRouter from './Routes/phoneRoute.js';
import laptopRouter from './Routes/latopRoute.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = 8000;
app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  
app.use('/api/phones', phoneRouter);
app.use('/api/laptops', laptopRouter);

const Data =     [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 17 Pro Max",
    price: 1200,
  },
  {
    id:2,
    brand: "Samsung",
    model: "Galaxy S25 Ultra",
    price: 1100,
}
]

      
app.get('/', (req, res) => {
    res.json(Data);
    console.log("Data sent successfully");
})

app.post('/', (req, res) => {
  const newphone = req.body;
  Data.push(newphone);
  res.json({ message: "POST request received" });
  console.log("POST request received");
} )

app.put('/', (req, res) => {
  res.json({ message: "PUT request received" });
  console.log("PUT request received");
})

app.delete('/', (req, res) => {
  res.json({ message: "DELETE request received" });
  console.log("DELETE request received");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
} )

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to MongoDB");
})
  















