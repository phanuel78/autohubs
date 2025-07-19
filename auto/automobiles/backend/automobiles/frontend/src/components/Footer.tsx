import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Automobiles. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/terms" className="hover:underline">Terms of Service</a>
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    <a href="/contact" className="hover:underline">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;