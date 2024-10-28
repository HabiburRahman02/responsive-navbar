import { useActionData } from "react-router-dom";


const UserDetails = () => {
    const user = useActionData();
    console.log(user);
    return (
        <div>
            <h3>Details</h3>
        </div>
    );
};

export default UserDetails;