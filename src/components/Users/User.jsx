import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, website } = user
    return (
        <div className="border-4 border-blue-600 rounded-lg space-y-4 p-5">
            <h3 className="text-2xl">{name}</h3>
            <p>Email: {email}</p>
            <p>Web: {website}</p>
            <Link to={`/user`}>
                <button className="btn mt-4">User Details</button>
            </Link>
        </div>
    );
};

export default User;