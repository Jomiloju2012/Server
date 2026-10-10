
import mongoose from 'mongoose';

const phoneSchema = new mongoose.Schema({
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
  }
});

export default mongoose.model('Phone', phoneSchema);