import React from 'react'
import { OrderTraker } from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarBorder } from '@mui/icons-material'
import AddressCard from '../component/AdressCard/AddressCard'

const OrderDetails = () => {
  return (
    <div className=' py-5 px:5 lg:px-20'>
        <div>
        <h1 className='font-bold text-lg text-left py-5'>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTraker activeStep={3}/>
        </div>
        <Grid className='space-y-5' container>
      {[1,1,1,1,1].map((item)=>  <Grid item container className=' shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}> 
                <Grid item xs={6}>
                    <div  className='flex items-center  space-x-2'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="" alt="" />
                        <div className=' text-left'>
                            <p className=' font-semibold'>gyhcch cthucj yjikmjyr ukyuy</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: pink</span> <span>Size: M</span></p>
                            <p>Seller: Linaria</p>
                            <p>₹1999</p>
                        </div>
                    </div>

                </Grid>
                <Grid item>
                  <Box sx={{color:deepPurple[500]}}>
                     <StarBorder sx={{fontSize:"2.5rem"}} className='px-2'/>
                     <sapn>Rate & Review Product</sapn>
                  </Box>
                
                </Grid>
               
            </Grid>)} 

        </Grid>
    </div>
  )
}

export default OrderDetails