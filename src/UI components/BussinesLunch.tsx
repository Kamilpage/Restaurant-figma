import '../styles/main.css'
import MyOrderBtn from "./MyOrderBtn.tsx";

const BussinesLunch = () => {
    return (
        <section className='bussinesLunch-section'>
            <div className='bussines-bg'>
                <div className='container'>
                    <div className="bussinesLunch__inner">
                        <div className="bussinesLunch__inner-info">
                            <h2>Отпразднуйте в одном из <br/>
                                самых лучших ресторанов.</h2>
                            <p>Только в этом месяце бизнес-ланч от 250 ₽</p>
                        </div>
                        <div className="bussinesLunch__inner-action">
                            <MyOrderBtn label='ЗАКАЗ СТОЛИКА' />
                        </div>

                    </div>
                </div>
            </div>
        </section>
);
};

export default BussinesLunch;