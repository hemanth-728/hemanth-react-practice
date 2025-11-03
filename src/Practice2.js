import { useContext, useState, useEffect, useMemo } from "react";
import { contextValues } from "./App";
import axios from "axios";

function Practice2() {
    let argsData = useContext(contextValues);
    
    // State for axios example
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Axios example - fetch posts from JSONPlaceholder API
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data.slice(0, 10)); // Get only first 10 posts
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    // useMemo example - Filter posts based on search term
    const filteredPosts = useMemo(() => {
        console.log('Filtering posts...'); // This will only run when posts or searchTerm changes
        return posts.filter(post => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [posts, searchTerm]);

    // useMemo example - Calculate expensive computation
    const expensiveCalculation = useMemo(() => {
        console.log('Performing expensive calculation...');
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        return result;
    }, []); // Empty dependency array means this runs only once

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Practice2 Component</h2>
            
            {/* Context Data */}
            <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
                <h3>Context Data:</h3>
                <p>ID: {argsData?.id}</p>
                <p>Name: {argsData?.name}</p>
            </div>

            {/* useMemo Example - Expensive Calculation */}
            <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                <h3>useMemo Example - Expensive Calculation:</h3>
                <p>Result: {expensiveCalculation}</p>
                <small>This calculation runs only once due to useMemo</small>
            </div>

            {/* Axios Example */}
            <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #eee' }}>
                <h3>Axios Example - Fetch Posts:</h3>
                <button onClick={fetchPosts} disabled={loading}>
                    {loading ? 'Loading...' : 'Refresh Posts'}
                </button>
                
                {/* Search Input for useMemo filtering example */}
                <div style={{ margin: '10px 0' }}>
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: '5px', width: '200px' }}
                    />
                </div>

                {loading ? (
                    <p>Loading posts...</p>
                ) : (
                    <div>
                        <h4>Filtered Posts ({filteredPosts.length}):</h4>
                        {filteredPosts.map(post => (
                            <div key={post.id} style={{ 
                                margin: '10px 0', 
                                padding: '10px', 
                                backgroundColor: '#f9f9f9',
                                borderRadius: '5px'
                            }}>
                                <h5>{post.title}</h5>
                                <p>{post.body.substring(0, 100)}...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Practice2;