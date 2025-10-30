import { useEffect, useState } from 'react';
import './Product1.css';

function Product1(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
    }, []);

    async function getProducts() {
        try {
            setLoading(true);
            let response = await fetch('https://fakestoreapi.com/products');
            let data = await response.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    }
    
    if (loading) {
        return <div className="loading-message">Products Fetching....</div>;
    }

    return (
        <div className="products-container">
            <h2 className="products-title">Products</h2>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">${product.price}</p>
                        <p className="product-description">{product.description.substring(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Product1;