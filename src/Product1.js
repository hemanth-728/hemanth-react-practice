import { useEffect, useState } from 'react';
import './Product1.css';

function Product1(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    async function getProducts() {
            let response = await fetch('https://fakestoreapi.com/products');
            let data = await response.json();
            setProducts(data);
    }

    if (products.length === 0) {
        return ('Fetching Products...')
    }

    if (products.length > 0) {
        return (
            <div className='fake-products-container'>
                <h1>Fake Products</h1>
                <div className='products-tile'>
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
}
export default Product1;