import React from 'react'
import Cart from "./Cart";
import {Button, Card} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const AddressCart = ({item,showButton,handleSelectAddress}) => {

    return (
        <Card className='flex gap-5 w-64 p-5'>
            <HomeIcon/>
            <div className='space-y-3 text-gray-500'>
                <h1 className='font-semibold text-lg text-white'>
                    Home
                </h1>
                <p>
                    Mumbai, new shivam building, gokuldham market, 530068, Maharashtra, India
                </p>
                {showButton && (
                    <Button variant="outlined" fullWidth onClick={() => handleSelectAddress(item)}>Select</Button>
                )}
            </div>
        </Card>
    )
}
export default AddressCart
