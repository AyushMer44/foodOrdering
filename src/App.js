import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme} from "./Theme/DarkTheme";
import Home from "./Components/Home/Home";
import {Restaurant} from "@mui/icons-material";
import RestaurantDetails from "./Components/Restaurant/RestaurantDetails";
import Cart from "./Components/Cart/Cart";
import Profile from "./Components/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./Components/State/Authentication/Action";
import {store} from "./Components/State/Store";
import { findCart } from './Components/State/Cart/Action';
import { Routers } from './Routers/Routers';
import { getRestaurantByUserId } from './Components/State/Restaurant/Action';

function App() {
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const {auth} = useSelector(store => store)

    useEffect(() => {
        dispatch(getUser(auth.jwt || jwt))
        dispatch(findCart(jwt))
    }, [auth.jwt]);

    useEffect(()=>{
      dispatch(getRestaurantByUserId(auth.jwt || jwt));
    },[auth.user])

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        {/* <Navbar/> */}
        {/* <Home/> */}
        {/* <RestaurantDetails/> */}
        {/* <Cart/> */}
        {/* <Profile/> */}
        <Routers/>
    </ThemeProvider>
  );
}

export default App;
