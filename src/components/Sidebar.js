import { useSelector } from "react-redux"

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    //Early Return Pattern
    if (!isMenuOpen) return null;

    return (
        <div className="p-5 w-44 shadow-lg">
        <ul>
            <li>Home</li>
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
        </ul>

            <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        </div>
    )
}

export default Sidebar;
