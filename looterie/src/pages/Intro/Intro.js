// Lib Imports
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// Styles Import
import './styles.css';

// Components Imports
import Register from '../components/Register';
import Login from '../components/Login';

// Image imports
import logo from '../../assets/Logo.png';

const Intro = () => {
    const [loginDisplay, setLoginDisplay] = useState(false);
    const [registerDisplay, setRegisterDisplay] = useState(false);

    const formloginDisplayToggle = () => {
        (loginDisplay === true) ? setLoginDisplay(false) : setLoginDisplay(true); setRegisterDisplay(false);
    }
    const formRegisterDisplayToggle = () => {
        (registerDisplay === true) ? setRegisterDisplay(false) : setRegisterDisplay(true); setLoginDisplay(false);
    }
    
    return (
    <div id="page-intro">
        <div id="nav">
            <ul className="navbar">
                <li id="login" onClick={formloginDisplayToggle}>ENTRAR</li>
                <li id="register" onClick={formRegisterDisplayToggle}>CADASTRE-SE</li>
            </ul>
        </div>
        <div className="content">
            <div className="intro-logo-container">
                <img src={logo} alt="Loterie"/>
            </div>
            {loginDisplay ? <Login /> : null}
            {registerDisplay ? <Register /> : null}            
        </div>
    </div>
    );
}

export default Intro;