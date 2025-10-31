import './Header1.css';
import {Link} from 'react-router-dom';


function Header1() {
    return (
        <ul className='menu-class'>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/men">Men</Link> </li>
            <li> <Link to="/women">Women</Link> </li>
            <li> <Link to="/kids-boys">Kids-Boys</Link> </li>
            <li> <Link to="/kids-girls">Kids-Girls</Link> </li>
        </ul>
    )

}

export default Header1

// naku men click chester /men ki vellali ani Link use chestanu
// /men anedi path lo kanipistey dani xyz component render cheyli ani route use cheskuntanu
// Browser route anedi only root level use cheyali