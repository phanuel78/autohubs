import { Request, Response } from 'express';
import Brand from '../models/Brand';

// @desc    Get all brands
// @route   GET /api/brands
export const getBrands = async (req: Request, res: Response) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get a brand by slug
// @route   GET /api/brands/:slug
export const getBrandBySlug = async (req: Request, res: Response) => {
    const { slug } = req.params;
    try {
        const brand = await Brand.findOne({ slug });
        if (!brand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Create a new brand
// @route   POST /api/brands
// @access  Private (admin)
export const createBrand = async (req: Request, res: Response) => {
    const { name, slug } = req.body;
    try {
        const newBrand = new Brand({ name, slug });
        await newBrand.save();
        res.status(201).json(newBrand);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Update a brand
// @route   PUT /api/brands/:id
// @access  Private (admin)
export const updateBrand = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, slug } = req.body;
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(id, { name, slug }, { new: true });
        if (!updatedBrand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.status(200).json(updatedBrand);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Delete a brand
// @route   DELETE /api/brands/:id
// @access  Private (admin)
export const deleteBrand = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedBrand = await Brand.findByIdAndDelete(id);
        if (!deletedBrand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};