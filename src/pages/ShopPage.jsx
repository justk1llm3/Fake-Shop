import  { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/Navbar';

const ShopPage = () => {
    console.log("shop");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <NavBar></NavBar>
            <h1>Shop</h1>
            <div className='wrapper-flex'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
