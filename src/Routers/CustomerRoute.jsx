import React from 'react'
import {Route, Routes} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Cart from "../Components/Cart/Cart";
import RestaurantDetails from "../Components/Restaurant/RestaurantDetails";
import Profile from "../Components/Profile/Profile";
import Auth from "../Components/Auth/Auth";
import { PaymentSuccess } from '../Components/PaymentSuccess/PaymentSuccess';

const CustomerRoute = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/account/:register' element={<Home/>}/>
                <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/my-profile/*' element={<Profile/>}/>
                <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
            </Routes>
            <Auth/>
        </div>
    )
}
export default CustomerRoute
