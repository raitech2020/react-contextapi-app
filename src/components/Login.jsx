import {useNavigate} from "react-router-dom"
import {useContext} from "react"
import {LoginContext} from "../context/LoginContext";
import {ProfileContext} from "../context/ProfileContext";

function Login() {
    const {setUsername} = useContext(LoginContext)
    const {setShowProfile} = useContext(ProfileContext)
    const navigate = useNavigate()

    return (
        <>
            <input
                type="text"
                placeholder="username"
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="password"
            />
            <br/>
            <button onClick={() => {
                setShowProfile(true)
                navigate("/profile")
            }}>
                Login
            </button>
        </>
    )
}

export default Login
