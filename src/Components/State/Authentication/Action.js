import {
    ADD_TO_FAVOURITE_FAILURE,
    ADD_TO_FAVOURITE_REQUEST, ADD_TO_FAVOURITE_SUCCESS, GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS, LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./ActionType";
import axios from "axios";
import {api, API_URL} from "../../Config/Api";

export const registerUser=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const {data} = await axios.post(`${API_URL}/auth/signup`,reqData.userData);

        if(data.jwt) localStorage.setItem("jwt",data.jwt);
        if(data.role === "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurants")
        }

        else{
            reqData.navigate("/")
        }

        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
        console.log("Register Success ",data)
    }
    catch (error){
        dispatch({type:REGISTER_FAILURE,payload:error})
        console.log("Register Error",error);
    }
}

export const loginUser=(reqData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const {data} = await axios.post(`${API_URL}/auth/signin`,reqData.userData);

        if(data.jwt) localStorage.setItem("jwt",data.jwt);
        if(data.role === "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurants")
        }

        else{
            reqData.navigate("/")
        }

        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        console.log("Login Success ",data)
    }
    catch (error){
        dispatch({type:LOGIN_FAILURE,payload:error})
        console.log("Login Error",error);
    }
}

export const getUser=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try{
        const {data} = await api.get(`/api/users/profile`,{
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({type:GET_USER_SUCCESS,payload:data})
        console.log("Get User Profile",data)
    }
    catch (error){
        dispatch({type:GET_USER_FAILURE,payload:error})
        console.log("Get Error",error);
    }
}

export const addToFavourite=({jwt,restaurantId})=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVOURITE_REQUEST})
    try{
        const {data} = await api.put(`/api/restaurants/${restaurantId}/add-favourites`,{},{
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        });

        dispatch({type:ADD_TO_FAVOURITE_SUCCESS,payload:data})
        console.log("Added to Favourites...",data)
    }
    catch (error){
        dispatch({type:ADD_TO_FAVOURITE_FAILURE,payload:error})
        console.log("Favourites Error",error);
    }
}

export const logout=()=>async(dispatch)=>{
    // dispatch({type:LOGOUT})
    try{
        localStorage.clear();// Remove jwt token from localStorage when we logOut...
        dispatch({type:LOGOUT})
        console.log("Logout Success")
    }
    catch (error){
        console.log("error",error);
    }
}
