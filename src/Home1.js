import { Link, Outlet, useParams, useLocation } from "react-router-dom";
function Home1() {
    return (
        <div>
            <h3>Route Params Examples:</h3>
            <Link to="user/1">
                <button>User1</button>
            </Link>
            <Link to="user/2">
                <button>User2</button>
            </Link>
            <Link to="user/3">
                <button>User3</button>
            </Link>
            <Link to="user/4">
                <button>User4</button>
            </Link>
            
            <h3>Search Params Examples:</h3>
            <Link to="user/1?name=Alice&age=30&city=Boston">
                <button>User1 with Search Params</button>
            </Link>
            <Link to="user/2?name=Bob&age=25&city=Chicago">
                <button>User2 with Search Params</button>
            </Link>
            <Link to="user/3?name=Charlie&age=35&city=Seattle">
                <button>User3 with Search Params</button>
            </Link>
            <Link to="user/4?name=Diana&age=28&city=Miami">
                <button>User4 with Search Params</button>
            </Link>
            
            <Outlet />
        </div>
    )
}

export default Home1;