import './assets/styles/main.css'

const Hero = () => {
    return (
        <>
            <div className='background-img'>

            <div className="welcome-text">
                <div className="welcome-text__inner fn-tinos dark-orange-text">
                    <h3>Добро пожаловать в</h3>
                    <h2>Наш ресторан</h2>
                    <div className='d-flex'>

                        <hr/>
                        <p>ДОМ ЛУЧШЕЙ ЕДЫ</p>
                        <hr/>
                    </div>
                </div>
                    <button className='orange-btn btn'>VIEW MENU</button>

            </div>
            </div>
        </>
    );
};

export default Hero;