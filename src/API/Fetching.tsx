import axios from "axios";

export default class ItemService{
    static async getItems() {
        try {
            const responses = await axios.get('https://fakestoreapi.com/products')
            return responses.data
        }
        catch(e) {
            console.log('ОШИБКА', e)
        }
    }

}