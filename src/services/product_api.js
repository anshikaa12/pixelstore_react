import {
    useEffect,
    useState
} from "react";
import axios from "axios";

function useProduct() {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then((data) => {
            setCardData(data.data.products);
        }).catch((err) => {
            console.error(err)
        });
    }, []);
    return {
        cardData
    };
}

export {
    useProduct
};