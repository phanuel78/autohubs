import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import MessageChat from '../components/MessageChat';

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${slug}`);
                setProduct(response.data);
            } catch (err) {
                setError('Error fetching product details');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex flex-col md:flex-row">
                <img src={product.images[0].url} alt={product.images[0].alt} className="w-full md:w-1/2" />
                <div className="md:ml-4">
                    <p className="text-lg font-semibold">Price: ${product.price}</p>
                    <p className="mt-2">{product.description}</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Message Admin</h2>
                <MessageChat productId={product._id} />
            </div>
        </div>
    );
};

export default ProductDetail;