import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../AdminComponents/Admin/Admin'
import { CreateRestaurantForm } from '../AdminComponents/CreateRestaurantForm/CreateRestaurantForm'
import { useSelector } from 'react-redux'

export const AdminRoute = () => {
  const {restaurant} = useSelector(store => store)
  return (
    <div>
        <Routes>
            <Route path='/*' element={!restaurant.usersRestaurant?<CreateRestaurantForm/>:<Admin/>}/>
        </Routes>
    </div>
  )
}
