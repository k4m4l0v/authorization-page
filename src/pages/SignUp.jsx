import { Link } from "react-router-dom"
import '../styles/sign.css';
import { Mail } from '../components/Mail';
import { Lock } from '../components/Lock';
import picture from '../assets/picture-up.jpg';

export const SignUp = () => {
    return (
        <div className="sign__container">
            <div className="sign__wrapper">
                <header className="sign__header">
                    <h1 className="sign__title">Sign up</h1>
                </header>
                <p className="sign__description">
                    If you already have an account register<br/> 
                    You can   <Link to={'/login'} className="sign__link">Login here !</Link>
                </p>
                <form className="sign__form">
                    <div className="sign__input_container">
                        <label
                            for='email'
                            className="sign__input_label"
                        >
                            Email
                        </label>
                        <form className="sign-up__input_wrapper">
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
                            for='username'
                            className="sign__input_label"
                        >
                            Username
                        </label>
                        <form className="sign-up__input_wrapper">
                            <span className="sign__svg_container">
                                <Mail />
                            </span>
                            <input 
                                className="sign__form_input sign__form_input-login"
                                type="text" 
                                placeholder="Enter your User name" 
                                id="username"
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
                        <form className="sign-up__input_wrapper">
                            <span className="sign__svg_container">
                                <Lock />
                            </span>
                            <input 
                                className="sign__form_input sign__form_input-password"
                                type="password" 
                                placeholder="Enter your password"
                                id="password" 
                            />
                        </form>
                    </div>
                    <div className="sign__input_container">
                        <label
                            for='confirm'
                            className="sign__input_label"
                        >
                            Confirm Password
                        </label>
                        <form className="sign-up__input_wrapper">
                            <span className="sign__svg_container">
                                <Lock />
                            </span>
                            <input 
                                className="sign__form_input sign__form_input-password"
                                type="password" 
                                placeholder="Confirm your Password"
                                id="confirm" 
                            />
                        </form>
                    </div>
                    <button
                        className="sign-up__form_button"
                    >
                        Register
                    </button>
                </form>
            </div>
            <div className="sign__picture_container">
                <img src={picture} alt="picture" className="sign__picture_img" />
            </div>
        </div>
    )
}
