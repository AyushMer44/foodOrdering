import { Box, Button, Grid, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import CreateEvent from './CreateEvent';
import dayjs from 'dayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import e from 'cors';
import { useDispatch, useSelector } from 'react-redux';
import { createEventAction } from '../../Components/State/Restaurant/Action';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  image:"",
  location:"",
  name:"",
  startedAt:null,
  endsAt:null
}

export const Events = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formValues,setFormValues] = React.useState(initialValues)

  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {restaurant} = useSelector(store => store)

  const handleSubmit = (e) => {
    const formattedDate = {
      ...formValues,
      startedAt: formValues.startedAt.format("MMMM DD, YYYY hh:mm A"),
      endsAt: formValues.endsAt.format("MMMM DD, YYYY hh:mm A")
    }
    console.log("Submitted",formattedDate)
    e.preventDefault()
    dispatch(createEventAction({
      data:formValues,
      restaurantId:restaurant.userRestaurant?.id,
      jwt
    }))
    setFormValues(initialValues)
  }

  const handleFormChange = (e) => {
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }

  const handleDateChange = (date,dateType) => {
    // const formattedDate = dayjs(date).format("MMMM DD, YYYY hh:mm A");
    // setFormValues({...formValues,[dateType]:formattedDate})
    setFormValues({
      ...formValues,
      [dateType]:date
    })
  }

  return (
    <div>
      <div className='p-5'>
        <Button onClick={handleOpen} variant='contained'>Create New Event</Button>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <h1 className='mb-4 font-semibold'>CREATE EVENT</h1>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                name="image"
                label="Image URL"
                variant="outlined"
                fullWidth
                value={formValues.image}
                onChange={handleFormChange}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                name="location"
                label="Location"
                variant="outlined"
                fullWidth
                value={formValues.location}
                onChange={handleFormChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                name="name"
                label="Event Name"
                variant="outlined"
                fullWidth
                value={formValues.name}
                onChange={handleFormChange}
                />
              </Grid>

              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props}/>}
                    label="Start Date and Time"
                    value={formValues.startedAt}
                    onChange={(newValue) => 
                      handleDateChange(newValue,"startedAt")
                    }
                    inputFormat="MM/dd/yyyy hh:mm a"
                    className="w-full"
                    sx={{width: "100%"}}
                    />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props}/>}
                    label="End Date and Time"
                    value={formValues.endsAt}
                    onChange={(newValue) => 
                      handleDateChange(newValue,"endsAt")
                    }
                    inputFormat="MM/dd/yyyy hh:mm a"
                    className="w-full"
                    sx={{width: "100%"}}
                    />
                </LocalizationProvider>
              </Grid>
            </Grid>

            <Box mt={2}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
      </div>
    </div>
  )
}
