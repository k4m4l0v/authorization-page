import { Link } from "react-router-dom"
import '../styles/sign.css';
import { Mail } from '../components/Mail';
import { Lock } from '../components/Lock';
import picture from '../assets/picture-in.jpg';

export const SignIn = () => {
    return (
        <div className="sign__container">
            <div className="sign__wrapper">
                <header className="sign__header">
                    <h1 className="sign__title">Sign in</h1>
                </header>
                <p className="sign__description">
                    If you don’t have an account register<br/> 
                    You can   <Link to={'/registration'} className="sign__link">Register here !</Link>
                </p>
                <form className="sign__form">
                    <div className="sign__input_container">
                        <label
                            for='email'
                            className="sign__input_label"
                        >
                            Email
                        </label>
                        <form className="sign-in__input_wrapper">
                            <span className="sign__svg_container">
                                <Mail />
                            </span>
                            <input 
                                className="sign__form_input sign__form_input-login"
                                type="text" 
                                placeholder="Enter your email address" 
                                id="email"
                            />
                        </form>
                    </div>
                    <div className="sign__input_container">
                        <label
                            for='password'
                            className="sign__input_label"
                        >
                            Password
                        </label>
                        <form className="sign-in__input_wrapper">
                            <span className="sign__svg_container">
                                <Lock />
                            </span>
                            <input 
                                className="sign__form_input sign__form_input-password"
                                type="password" 
                                placeholder="Enter your Password"
                                id="password" 
                            />
                        </form>
                    </div>
                    <button
                        className="sign-in__form_button"
                    >
                        Login
                    </button>
                </form>
            </div>
            <div className="sign__picture_container">
                <img src={picture} alt="picture" className="sign__picture_img" />
            </div>
        </div>
    )
}
