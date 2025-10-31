function User4({ searchParams }) {
    const name = searchParams?.get('name');
    const age = searchParams?.get('age');
    const city = searchParams?.get('city');
    
    return (
        <div>
            <h2>User4 Component</h2>
            <p>Search Params - Name: {name || 'Not provided'}</p>
            <p>Search Params - Age: {age || 'Not provided'}</p>
            <p>Search Params - City: {city || 'Not provided'}</p>
        </div>
    );
}

export default User4;