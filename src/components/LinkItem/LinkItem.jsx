import { Link as Lk } from "react-router-dom";


const LinkItem = ({ route }) => {
    return (
        <li className="font-semibold my-2">
            <Lk to={route.route}>{route.name}</Lk>
        </li>
    );
};

export default LinkItem;