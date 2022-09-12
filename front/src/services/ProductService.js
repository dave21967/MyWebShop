import axios from 'axios';

export default {
    getProducts: () => {
        return new Promise((resolve, reject) => {
            axios.get("./api/products/all")
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
        });
    },
    getProductDetails: (id) => {
        return new Promise((resolve, reject) => {
            axios.get("./api/products/details/"+id)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
        });
    }
};