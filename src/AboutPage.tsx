import './styles/main.css'
import slider1 from './assets/aboutPage/about1.jpg'
import slider2 from './assets/aboutPage/about2.jpg'
import slider3 from './assets/aboutPage/about3.jpg'
import slider4 from './assets/aboutPage/about4.jpg'
import slider5 from './assets/aboutPage/about5.jpg'
import Header from "./UI components/Header.tsx";


export default function AboutPage() {
    return (
        <div className='side-page'>
            <Header/>
            <div className='slider-container'>
                <div className='slider-wrapper'>
                    <div className='silder'>
                        <img id='slider-1' src={slider1} alt=""/>
                        <img id='slider-2' src={slider2} alt=""/>
                        <img id='slider-3' src={slider3} alt=""/>
                        <img id='slider-4' src={slider4} alt=""/>
                        <img id='slider-5' src={slider5} alt=""/>
                    </div>
                    <div className='slider-nav'>
                        <a href='#slider-1'></a>
                        <a href='#slider-2'></a>
                        <a href='#slider-3'></a>
                        <a href='#slider-4'></a>
                        <a href='#slider-5'></a>
                    </div>
                </div>
            </div>
            <div className='about-page-inner'>
                <div className='about-page-content'>

                    <h1>About us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem ducimus facilis libero
                        nihil, pariatur provident quam recusandae voluptatum. Accusamus aut beatae consectetur
                        consequatur consequuntur distinctio natus quas recusandae reiciendis.</p>
                </div>
            </div>
        </div>
    );
};