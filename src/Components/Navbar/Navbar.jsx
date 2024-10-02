import React from 'react'
import {Avatar, Badge, Box, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {pink} from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import {Person} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { store } from '../State/Store';

export const Navbar = () => {
    const navigate = useNavigate()
    const {auth} = useSelector(store=> store)
    const {cart} = useSelector(store => store)

    const handleAvatarClick=()=>{
        if(auth.user?.role === "ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else{
            navigate("/admin/restaurants")
        }
    }
    return (
        /* Since, our website will be fully responsive...Thats'why we used 2 px's below, one for small screen and one for large screen...*/
        <Box className='px-5 sticky z-50 py-[.8rem] bg-[#e91a63] lg:px-20 flex justify-between'>

            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li onClick={() => navigate("/")} className='logo font-semibold text-gray-300 text-2xl'>
                    Ayush Food
                </li>
            </div>

            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{fontSize: "1.5rem"}}/>
                    </IconButton>
                </div>

                <div className='cursor-pointer'>
                    {auth.user ?
                        <Avatar onClick={handleAvatarClick} sx={{bgcolor: "white", color: pink.A400}}>{auth.user?.fullName[0].toUpperCase()}</Avatar>:
                        <IconButton onClick={() => navigate("/account/login")}>
                            <Person/>
                        </IconButton>
                    }
                </div>

                <div className=''>
                    <IconButton onClick={() => navigate("/cart")}>
                        <Badge color='secondary' badgeContent={cart.cart?.item.length}>
                            <ShoppingCartIcon sx={{fontSize: "1.5rem"}}/>
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    )
}

export default Navbar
