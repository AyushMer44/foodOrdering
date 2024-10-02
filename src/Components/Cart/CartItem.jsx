import React from 'react'
import {Chip, IconButton} from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, updateCartItem } from '../State/Cart/Action';

const CartItem = ({items}) => {

    const navigate = useNavigate()
    const {auth} = useSelector(store=> store)
    const {cart} = useSelector(store => store)
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")

    const handleUpdateCartItem = (value) => {
        if(value === -1 && items.quantity === 1){
            handleRemoveCartItem()
        }

        const data = {cartItemId:items.id,quantity:items.quantity+value}
        dispatch(updateCartItem({data,jwt}))
    }

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem({cartItemId:items.id,jwt:auth.jwt || jwt}))
    }

    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>
               <div>
                   <img className='w-[5rem] h-[5rem] object-cover'
                        src={items.food.image[0]} alt=""/>
               </div>
               <div className='flex items-center justify-between lg:w-[70%]'>
                   <div className='space-y-1 lg:space-y-3 w-full'>
                       <p>{items.food.name}</p>
                       <div className='flex justify-between items-center'>
                           <div className='flex justify-between space-x-1'>
                               <IconButton onClick={() => handleUpdateCartItem(-1)}>
                                   <RemoveCircleOutlineIcon/>
                               </IconButton>

                               <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                   {items.quantity}
                               </div>

                               <IconButton onClick={() => handleUpdateCartItem(1)}>
                                   <ControlPointIcon/>
                               </IconButton>
                           </div>
                       </div>
                   </div>
                   <p>₹{items.totalPrice}</p>
               </div>
            </div>

            <div className='pt-3 space-x-2'>
                {items.ingredients.map((ingredient) => <Chip label={ingredient}/>)}
            </div>
        </div>
    )
}
export default CartItem
