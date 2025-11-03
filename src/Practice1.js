import { useRef } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Customhook from './scripts/Customhook.js';
import './Practice1.css';
import Practice2 from './Practice2';

function Practice1(props) {
    let { id, nam } = useParams();

    let test = useLocation(); // This will provide access to entire URL address bar
    let searchParams = new URLSearchParams(test.search); // This will provide access to search params
    let abc = searchParams.get('abc'); // With this we can get actual query string parameter
    let navigate = useNavigate();
    let usingRef = useRef();
    let prod = Customhook('https://fakestoreapi.com/products');

    let s1 = {
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px'
    }


    console.log(usingRef)

    if (id === '1') {
        return (
            <>
            <div ref={usingRef}>This has route params {nam}</div>

            <button onClick={(e) => {
                usingRef.current.innerHTML = 'This has updated by using useRef Hook'
            }}> Update </button>
            </>
        )

    } else if(abc === 'test') {
        return (
            navigate(`${test.pathname}?foo=bar`)
        )
    } else {
        return (
        // <div style={s1}>
        //     <h1> Listing Products </h1>
        //     <div className='prod-grid-container'>
        //         {prod.map(p => (
        //             <div className="product-tile">
        //                 <img className="product-img" src={p.image} />
        //                 <h2 className="poduct-title"> {p.title}</h2>
        //                 <h2 className="poduct-price"> ${p.price}</h2>
        //             </div>

        //         ))}
        //     </div>
        // </div>
        <div>
            <Practice2 />
        </div>
    );

    }

}
export default Practice1;