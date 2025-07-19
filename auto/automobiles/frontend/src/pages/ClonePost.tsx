import React, { useState } from 'react';
import axios from 'axios';

const ClonePost = () => {
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleClonePost = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post('/api/externalPosts', { url });
            setMessage(`Post cloned successfully! Post ID: ${response.data._id}`);
        } catch (error) {
            setMessage('Failed to clone post. Please check the URL and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Clone External Post</h1>
            <form onSubmit={handleClonePost} className="mb-4">
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter the URL of the post"
                    className="border p-2 w-full mb-2"
                    required
                />
                <button
                    type="submit"
                    className={`bg-blue-500 text-white p-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Cloning...' : 'Clone Post'}
                </button>
            </form>
            {message && <p className="text-red-500">{message}</p>}
        </div>
    );
};

export default ClonePost;