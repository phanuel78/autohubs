import { Request, Response } from 'express';
import ExternalPost from '../models/ExternalPost';
import fetchExternalPost from '../utils/fetchExternalPost';

// Create a new external post
export const createExternalPost = async (req: Request, res: Response) => {
    try {
        const { url } = req.body;
        const postData = await fetchExternalPost(url);
        
        if (!postData) {
            return res.status(404).json({ message: 'Post not found or could not be fetched.' });
        }

        const newPost = new ExternalPost(postData);
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating external post', error });
    }
};

// Get all external posts
export const getAllExternalPosts = async (req: Request, res: Response) => {
    try {
        const posts = await ExternalPost.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching external posts', error });
    }
};

// Get a specific external post by ID
export const getExternalPostById = async (req: Request, res: Response) => {
    try {
        const post = await ExternalPost.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found.' });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching external post', error });
    }
};

// Delete an external post
export const deleteExternalPost = async (req: Request, res: Response) => {
    try {
        const post = await ExternalPost.findByIdAndDelete(req.params.id);
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found.' });
        }

        res.status(200).json({ message: 'Post deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting external post', error });
    }
};