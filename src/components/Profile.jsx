import {Link} from "react-router-dom"
import {useContext} from "react";
import {LoginContext} from "../context/LoginContext";

function Profile() {
    const {username} = useContext(LoginContext)

    return (
        <>
            <h1>Profile</h1>
            <p>Username: {username}</p>
            <Link to="/">Go to Home</Link>
        </>
    )
}

export default Profile
