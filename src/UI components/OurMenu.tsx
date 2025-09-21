import '../styles/main.css'
import {useState} from "react";
import burgerIcon from '../assets/menu-burger.png'
import MyOrderBtn from "./MyOrderBtn.tsx";

const OurMenu = () => {
    const [burgers] = useState([{
        recommended: true, icon: burgerIcon, price: 420, title: 'Гамбургер макси', body: 'Максимально толстый \n' +
            'слой мяса'
    }, {
        recommended: true, icon: burgerIcon, price: 420, title: 'Гамбургер макси', body: 'Максимально толстый \n' +
            'слой мяса'
    }, {
        recommended: true, icon: burgerIcon, price: 420, title: 'Гамбургер макси', body: 'Максимально толстый \n' +
            'слой мяса'
    }]);
    return (
        <section className="our-menu">
            <div className="menu-image">
                <div className="container">
                    <div className="our-menu__header"><h2>Наше меню</h2></div>
                    <div className="our-menu__inner">

                        {burgers.map((item, index) => (
                            <div className='burger-item' key={index}>
                                <div className={item.recommended ? 'isRecommended' : 'not-recommended'}>
                                    <p>RECOMMENDED</p></div>
                                <div className='burger-item__img'>
                                    <img src={item.icon} alt=""/>
                                    <div className='price-tag'>
                                        <div className='price-tag__inner'>
                                            <h3>
                                                {item.price}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <h2>Гамбургер макси</h2>
                                <p>Максимально толстый
                                    слой мяса</p>
                                <MyOrderBtn label='ЗАКАЗАТЬ' />
                            </div>))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurMenu;