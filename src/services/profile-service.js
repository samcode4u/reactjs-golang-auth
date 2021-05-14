import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/";

const getRestricted = () => {
    return axios.get(API_URL + "restricted", { headers: authHeader() });
};

export default {
    getRestricted
};