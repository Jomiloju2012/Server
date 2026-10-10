
import mongoose from 'mongoose';

const laptopSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number
  },
  year: {   
    type: Date,
    default: Date.now,
    required: true
  },
  imageUrl: {
    type: String
  }
});

export default mongoose.model('Laptop', laptopSchema);