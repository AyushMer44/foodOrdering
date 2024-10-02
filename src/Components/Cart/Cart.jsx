import React from 'react'
import {Box, Button, Card, Divider, Grid, Modal, TextField} from "@mui/material";
import CartItem from "./CartItem";
import AddressCart from "./AddressCart";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../State/Order/Action';
// import * as Yup from "yup"

const items = [1,1,1,1]
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};

const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:""
}

// const validationSchema= Yup.object().shape({
//     streetAddress:Yup.string().required("Street address is required"),
//     state:Yup.string().required("State is required"),
//     pinCode:Yup.required("PinCode is required"),
//     city:Yup.string().required("City is required")
// })

function Cart() {
    const createOrderUsingSelectedAddress = () => {

    }
    const handleOpenAddressModel=() => setOpen(true);

    const [open, setOpen] = React.useState(false);

    const {cart,auth} = useSelector(store => store)

    const dispatch = useDispatch()

    const handleClose = () => setOpen(false);

    const handleSubmit = (value) => {
        const data={
            jwt:localStorage.getItem("jwt"),
            order:{
                restaurantId:cart.cartItems[0].food?.restaurant.id,
                deliveryAddress:{
                    fullName:auth.user?.fullName,
                    streetAddress:value.streetAddress,
                    city:value.city,
                    state:value.state,
                    pincode:value.pincode,
                    country:"India" 
                }
            }
        }

        dispatch(createOrder(data))
    };

    // console.log("CartItem : ",cart.cartItems)

    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {cart.cartItems.map((items) => <CartItem items={items}/>)}

                    <Divider/>

                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-500'>
                                <p>Item Total</p>
                                <p>₹{cart.cart?.total}</p>
                            </div>

                            <div className='flex justify-between text-gray-500'>
                                <p>Delivery Charge</p>
                                <p>₹40</p>
                            </div>

                            <div className='flex justify-between text-gray-500'>
                                <p>GST and Restaurant Charges</p>
                                <p>₹44</p>
                            </div>

                            <Divider/>
                        </div>

                        <div className='flex justify-between text-gray-500'>
                            <p>Total Pay</p>
                            <p>₹{cart.cart?.total+40+44}</p>
                        </div>
                    </div>
                </section>

                <Divider orientation='vertical' flexItem/>

                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address:</h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1,1,1,1,1].map((item) => (
                            <AddressCart item={item} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress}/>
                            ))}
                            <Card className='flex gap-5 w-64 p-5'>
                                <AddLocationAltIcon/>
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg text-white'>
                                        Add New Address
                                    </h1>
                                        <Button variant="outlined" fullWidth onClick={handleOpenAddressModel}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues}
                            // validationSchema={validationSchema}
                            onSubmit={handleSubmit}>
        
                            <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                           name="streetAddress"
                                           label="Street Address"
                                           fullWidth
                                           variant="outlined"

                                        // error={!ErrorMessage("streetAddress")}
                                        // helperText={
                                        //     <ErrorMessage name='streetAddress'>
                                        //         {(msg)=><span className="text-red-500">{msg}</span>}
                                        //     </ErrorMessage>
                                        // }
                                    />
                                    {/* <label htmlFor='streetAddress'>Street Address</label>
                                    <TextField name="streetAddress" placeholder='streetAddress'/> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                           name="state"
                                           label="state"
                                           fullWidth
                                           variant="outlined"
                                        // error={!ErrorMessage("state")}
                                        // helperText={
                                        //     <ErrorMessage name='state'>
                                        //         {(msg)=><span className="text-red-500">{msg}</span>}
                                        //     </ErrorMessage>
                                        // }
                                    />
                                    {/* <label htmlFor='state'>State</label>
                                    <TextField name="state" placeholder='state'/> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                           name="city"
                                           label="city"
                                           fullWidth
                                           variant="outlined"
                                        // error={!ErrorMessage("city")}
                                        // helperText={
                                        //     <ErrorMessage name='city'>
                                        //         {(msg)=><span className="text-red-500">{msg}</span>}
                                        //     </ErrorMessage>
                                        // }
                                        
                                    />
                                    {/* <label htmlFor='city'>City</label>
                                    <TextField name="city" placeholder='city'/> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                           name="pincode"
                                           label="pincode"
                                           fullWidth
                                           variant="outlined"
                                        // error={!ErrorMessage("pincode")}
                                        // helperText={
                                        //     <ErrorMessage name='pincode'>
                                        //         {(msg)=><span className="text-red-500">{msg}</span>}
                                        //     </ErrorMessage>
                                        // }
                                    />
                                    {/* <label htmlFor='pincode'>Pincode</label>
                                    <TextField name="pincode" placeholder='pincode'/> */}
                                </Grid>

                                <Grid item xs={12}>
                                    <Button fullWidth variant='contained' type='submit' color='primary'>
                                        Deliver Here
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
    
                    </Formik>
                    
                </Box>
            </Modal>
        </>
    )
}

export default Cart
