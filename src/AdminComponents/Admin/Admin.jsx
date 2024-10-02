import React, { useEffect } from 'react'
import { AdminSidebar } from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Dashboard/Dashboard'
import { Orders } from '../Orders/Orders'
import { Menu } from '../Menu/Menu'
import { FoodCategory } from '../FoodCategory/FoodCategory'
import { Ingredients } from '../Ingredients/Ingredients'
import { Events } from '../Events/Events'
import { RestaurantDetails } from './RestaurantDetails'
import { CreateMenuForm } from '../Menu/CreateMenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantById, getRestaurantsCategory } from '../../Components/State/Restaurant/Action'
import { getMenuItemsByRestaurantId } from '../../Components/State/Menu/Action'
import { fetchRestaurantOrder } from '../../Components/State/Restaurant Orders/Action'

export const Admin = () => {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")

  const {restaurant} = useSelector((store) => store)

  const handleClose = () =>{
  }

  useEffect(() => {
    dispatch(getRestaurantsCategory({
      jwt,
      restaurantId: restaurant.usersRestaurant?.id,
    }))
    
    dispatch(fetchRestaurantOrder({
      jwt,
      restaurantId: restaurant.usersRestaurant?.id
    }))
  },[])

  return (
    <div>
      <div className='lg:flex justify-between'>
        {/* It takes 20% of width because another one is taking 80% of width */}
        <div>
          <AdminSidebar handleClose={handleClose}/>
        </div>
        {/* It takes 80% of width */}
        <div className='lg:w-[80%]'> 

          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/category' element={<FoodCategory/>}/>
            <Route path='/ingredients' element={<Ingredients/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/details' element={<RestaurantDetails/>}/>
            <Route path='/add-menu' element={<CreateMenuForm/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}
