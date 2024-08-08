import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    //Early Return Pattern
    if (!isMenuOpen) return null;

    return (
        <div className="p-5 w-44 shadow-lg">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Live</li>
                <li>Shorts</li>
                <li>Trending</li>
            </ul>

            <h1 className="font-bold py-5">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h1 className="font-bold pt-5">Explore</h1>
            <ul>
                <li>Shopping</li>
                <li>Sports</li>
                <li>Courses</li>
                <li>Podcasts</li>
                <li>Fashion</li>
                <li>Beauty</li>
                <li>Courses</li>
                <li>Podcasts</li>
                <li>Fashion</li>
                <li>Beauty</li>
            </ul>
        </div>
    )
}

export default Sidebar;
