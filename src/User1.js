import { useParams, useLocation, useNavigate } from "react-router-dom";
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';

function User1() {
    const { ad } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    const city = searchParams.get('city');
    
    const updateSearchParams = () => {
        const newSearchParams = new URLSearchParams();
        newSearchParams.set('name', 'John');
        newSearchParams.set('age', '25');
        newSearchParams.set('city', 'NewYork');
        navigate(`${location.pathname}?${newSearchParams.toString()}`);
    };
    
    const clearSearchParams = () => {
        navigate(location.pathname);
    };
    
    if (ad === '1') {
        return (
            <div>
                <h2>User1 Component</h2>
                <p>Route Param: {ad}</p>
                <p>Search Params - Name: {name || 'Not provided'}</p>
                <p>Search Params - Age: {age || 'Not provided'}</p>
                <p>Search Params - City: {city || 'Not provided'}</p>
                <button onClick={updateSearchParams}>Set Search Params</button>
                <button onClick={clearSearchParams}>Clear Search Params</button>
            </div>
        )
    } else if (ad === '2') {
        return <User2 searchParams={searchParams} />
    } else if (ad === '3') {
        return <User3 searchParams={searchParams} />
    } else if (ad === '4') {
        return <User4 searchParams={searchParams} />
    }
    
    return ('User Component')
}

export default User1;