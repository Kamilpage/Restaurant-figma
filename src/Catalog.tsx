import Header from "./UI components/Header.tsx";
import {useState, useEffect} from "react";
import ItemService from "./API/Fetching.tsx";
import ZoomImg from "./ZoomImg.tsx";


const Catalog = () => {
    const [items, setItems] = useState([{}]);

   async function fetchItems() {
        const apiItem = await ItemService.getItems();

       setItems(apiItem);
    }

    useEffect(() => {
        fetchItems()
    }, []);



    return (
        <section className='catalog side-page'>
            <Header />
        <div className='container catalog-container'>
            <h1>Menu</h1>
            <div className='catalog-content'>
                {items.map((item,index) => (<div key={index} className='menu-options'>
                   <ZoomImg src={item.image} alt={item.title} price={item.price} />
                    <h2>{item.title}</h2>
                    <h2>{item.price}$</h2>
                    <div>

                    <button className='btn orange-btn'>Add +1</button>
                    </div>
                </div>))}
            </div>
        </div>
        </section>
    );
};

export default Catalog;