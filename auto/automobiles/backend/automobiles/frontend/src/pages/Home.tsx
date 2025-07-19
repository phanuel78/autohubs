import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
    const [featuredProducts, setFeaturedProducts] = React.useState([]);

    React.useEffect(() => {
        const fetchFeaturedProducts = async () => {
            const response = await fetch('/api/products?featured=true');
            const data = await response.json();
            setFeaturedProducts(data);
        };

        fetchFeaturedProducts();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-bold text-center mb-6">Welcome to the Automobiles Marketplace</h1>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                </section>
                <section className="text-center">
                    <Link to="/all-products" className="text-blue-500 hover:underline">
                        View All Products
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;