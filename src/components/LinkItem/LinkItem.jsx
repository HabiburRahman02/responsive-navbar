

const LinkItem = ({ route }) => {
    return (
        <li className="font-semibold my-2">
            <a href={route.route}>{route.name}</a>
        </li>
    );
};

export default LinkItem;