import React, { useState } from 'react';
import axios from 'axios';

const Report = () => {
    const [issueType, setIssueType] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/reports', {
                issueType,
                description,
            });
            if (response.status === 200) {
                setSuccessMessage('Your report has been submitted successfully.');
                setIssueType('');
                setDescription('');
            }
        } catch (error) {
            setErrorMessage('There was an error submitting your report. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Report an Issue</h1>
            {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Issue Type</label>
                    <select
                        value={issueType}
                        onChange={(e) => setIssueType(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    >
                        <option value="">Select an issue type</option>
                        <option value="scam">Scam</option>
                        <option value="product_issue">Product Issue</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows={4}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Submit Report
                </button>
            </form>
        </div>
    );
};

export default Report;