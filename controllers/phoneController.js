import mongoose from 'mongoose';
import Phone from '../model/phoneSchema.js';    

export async function getPhone(req, res) {
    try {
        const phones = await Phone.find();
        res.json(phones);
        console.log("Data sent successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error fetching data:", error); 
    }
} 

export async function createPhone(req, res) {
    const { brand, model, price, year } = req.body;
    const phone = new Phone({
        brand,
        model,
        price,
        year
    });
    try {
        const savedPhone = await phone.save();
        res.status(201).json(savedPhone);
        console.log("Phone created successfully");
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("Error creating phone:", error);
    }
}

export async function updatePhone(req, res) {
    const { id } = req.params;
    const { brand, model, price, year } = req.body; 

    try {
        const updatedPhone = await Phone.findByIdAndUpdate(
            id,
            { brand, model, price, year },
            { new: true }
        );
        res.json(updatedPhone);
        console.log("Phone updated successfully");
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("Error updating phone:", error);
    }
}

export async function deletePhone(req, res) {
    const { id } = req.params;
    try {
        const deletedPhone = await Phone.findByIdAndDelete(id);
        res.json(deletedPhone);
        console.log("Phone deleted successfully");
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("Error deleting phone:", error);
    }
}

export async function getPhoneById(req, res) {
    const { id } = req.params;                  
    try {
        const phone = await Phone.findById(id);
        if (!phone) {
            return res.status(404).json({ message: "Phone not found" });
        }
        res.json(phone);    
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("Error fetching phone by ID:", error);
    }   

}
