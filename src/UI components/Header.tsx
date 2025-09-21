import cart from "../assets/cart.svg";
import '../styles/main.css'
import logo from '../assets/logo.svg'
import MyOrderBtn from "./MyOrderBtn.tsx";
import {Link} from "react-router-dom";

function Header() {
    return (
        <section className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <div className="nav-left">
                        <Link to='/Pages'> <img src={logo} alt="#"/></Link>
                    </div>
                    <div className='nav-right'>
                        <div className='nav-links'>
                            <Link to="/Pages">МЕНЮ</Link>
                            <Link to="/AboutPage">О НАС</Link>
                            <Link to="/Order">БРОН</Link>
                            <Link to='/Catalog'>
                                {<img
                                    src={cart} alt="#"/>}
                            </Link>
                        </div>
                        <hr className='vertical-line'/>
                        <div className='contact-left'>
                            <div className='contact'>
                                <p style={{fontWeight: "bold"}}>+999-888-76-54</p>
                                <p>Свяжитесь с нами для <br/>
                                    бронирования</p>
                            </div>
                            <MyOrderBtn label='ЗАКАЗ СТОЛИКА'/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Header;