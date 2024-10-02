/* Here we need to create the instance of API.*/

import axios from "axios";

export const API_URL="http://localhost:8080";
// export const API_URL="http://localhost:8000/";

export const api = axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})