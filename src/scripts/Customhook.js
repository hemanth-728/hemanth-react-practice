import { useEffect, useState } from "react";
function Customhook(url) {
    let [prod, updateProd] = useState([]);
    useEffect(() => {
       fetchSingleProduct();
    }, []);

    async function fetchSingleProduct() {
        let response = await fetch(url);
        let data = await response.json();
        updateProd(data);
        console.log(data);
    }

    return prod;

}

export default Customhook;