import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div className="text-center text-4xl font-semibold">
            <h3>Details || name:{user.name}</h3>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetails;