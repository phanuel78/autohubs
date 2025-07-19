import React, { useState } from 'react';
import axios from 'axios';

const AdminAddProduct = () => {
    const [formData, setFormData] = useState({
        brand: '',
        name: '',
        slug: '',
        description: '',
        price: '',
        images: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            images: [...e.target.files]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            if (key === 'images') {
                for (const file of formData.images) {
                    data.append('images', file);
                }
            } else {
                data.append(key, formData[key]);
            }
        }

        try {
            const response = await axios.post('/api/products', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Product added:', response.data);
            // Reset form or handle success
        } catch (error) {
            console.error('Error adding product:', error);
            // Handle error
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Brand</label>
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Images</label>
                    <input
                        type="file"
                        name="images"
                        onChange={handleFileChange}
                        multiple
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded p-2">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AdminAddProduct;