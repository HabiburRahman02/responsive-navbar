import { Link } from "react-router-dom";


const LinkItem = ({ route }) => {
    return (
        <li className="font-semibold my-2">
            <Link to={route.route}>{route.name}</Link>
        </li>
    );
};

export default LinkItem;