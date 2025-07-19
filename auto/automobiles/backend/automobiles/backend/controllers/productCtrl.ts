import { Request, Response } from 'express';
import Product from '../models/Product';
import { uploadImages } from '../utils/upload'; // Assuming you have a utility for handling image uploads

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { brandId, name, slug, description, price } = req.body;
        const images = await uploadImages(req.files); // Upload images and get their URLs

        const newProduct = new Product({
            brandId,
            name,
            slug,
            images,
            description,
            price,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

export const getProductBySlug = async (req: Request, res: Response) => {
    try {
        const { slug } = req.params;
        const product = await Product.findOne({ slug });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

// Additional controller methods can be added here as needed, such as updating or deleting products.