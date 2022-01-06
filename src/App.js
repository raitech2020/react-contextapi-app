import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Login from "./components/Login"
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import {LoginContextProvider} from "./context/LoginContext";
import {ProfileContextProvider} from "./context/ProfileContext";
import {CounterContextProvider} from "./context/CounterContext";

function App() {
    return (
        <div className="App">
            <LoginContextProvider>
                <ProfileContextProvider>
                    <CounterContextProvider>
                        <Router>
                            <Routes>
                                <Route path="/" element={
                                    <>
                                        <Login/>
                                        <hr/>
                                        <Counter/>
                                    </>
                                }
                                />
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="/counter" element={<Counter/>}/>
                            </Routes>
                        </Router>
                    </CounterContextProvider>
                </ProfileContextProvider>
            </LoginContextProvider>
        </div>
    );
}

export default App;
