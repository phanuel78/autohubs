import React, { useState } from 'react';

const ShareLink: React.FC<{ productId: string }> = ({ productId }) => {
    const [shareableLink, setShareableLink] = useState('');

    const generateShareableLink = () => {
        const link = `${window.location.origin}/products/${productId}`;
        setShareableLink(link);
        navigator.clipboard.writeText(link).then(() => {
            alert('Shareable link copied to clipboard!');
        });
    };

    return (
        <div className="flex flex-col items-center p-4 border rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Share this product</h2>
            <button
                onClick={generateShareableLink}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Generate Shareable Link
            </button>
            {shareableLink && (
                <div className="mt-4">
                    <p className="text-sm text-gray-600">Link:</p>
                    <input
                        type="text"
                        value={shareableLink}
                        readOnly
                        className="border rounded p-2 w-full mt-1"
                    />
                </div>
            )}
        </div>
    );
};

export default ShareLink;