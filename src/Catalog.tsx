import Header from "./UI components/Header.tsx";
import {useState, useEffect} from "react";
import ItemService from "./API/Fetching.tsx";


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
                    <img src={item.image} alt=""/>
                    <h2>{item.title}</h2>
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