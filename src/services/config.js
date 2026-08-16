import axios from "axios";


const apiproducts = axios.create({ baseURL: "https://fakestoreapi.com/" });

apiproducts.interceptors.response.use(
    (res) => res.data,
    // (error) => Promise.reject(error) 
)

export { apiproducts }