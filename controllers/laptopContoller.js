import mongoose from 'mongoose';
import Laptop from '../model/laptopSchema.js';    

export async function getLaptop(req, res) {
    try {
        const laptops = await Laptop.find();
        res.json(laptops);
        console.log("Data sent successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error fetching data:", error); 
    }
} 

export async function createLaptop(req, res) {
    const { brand, model, price, imageUrl, year } = req.body;
    const laptop = new Laptop({
        brand,
        model,
        price,
        imageUrl,
        year
    });
    if (!brand || !model || !imageUrl || !year ) {
        return res.status(400).json({ message: "Brand, model, image URL, and year are required fields." });
    }
    try {
        const savedLaptop = await laptop.save();
        res.status(201).json(savedLaptop);
        console.log("Laptop created successfully");
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("Error creating laptop:", error);
    }
}

export async function updateLaptop(req, res) {
    const { id } = req.params;
    const { brand, model, price, imageUrl, year } = req.body; 

    try {
        const updatedLaptop = await Laptop.findByIdAndUpdate(
            id,
            { brand, model, price, imageUrl, year },
            { new: true }
        );
        res.json(updatedLaptop);
        console.log("Laptop updated successfully");
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("Error updating laptop:", error);
    }
}

export async function deleteLaptop(req, res) {
    const { id } = req.params;
    try {
        const deletedLaptop = await Laptop.findByIdAndDelete(id);
        res.json(deletedLaptop);
        console.log("Laptop deleted successfully");
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("Error deleting laptop  :", error);
    }
}

export async function getLaptopById(req, res) {
    const { id } = req.params;  
    try {
        const laptop = await Laptop.findById(id);
        if (!laptop) {
            return res.status(404).json({ message: "Laptop not found" });
        }   
        res.json(laptop);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("Error fetching laptop by ID:", error);
    }       
}
