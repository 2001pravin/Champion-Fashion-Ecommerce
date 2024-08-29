import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className=' p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className=' w-[5rem] h-[5rem] object-cover object-top' src="" alt="" />
                    <div className='ml-5 space-y-2'>
                          <p className=''>Men dnvfi vnvnif vopnvr</p>
                          <p className=' opacity-50 text-xs font-semibold text-left'>Size: M</p>
                          <p className=' opacity-50 text-xs font-semibold text-left'>Color: Black</p>
                    </div>
                </div>

            </Grid>
            <Grid item xs={2}>
                <p>₹1999</p>

            </Grid>
            <Grid item xs={4}>
             {true && <div>
                <p>
                <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                    Delivered On March 03
                    </span>
                 
                </p>
                <p className=' text-xs'>
                        your item Has Been Delivered
                    </p>

             </div> }
              { false && <p>
                <AdjustIcon/>
 <AdjustIcon/>
                    <span>
                       Expected  Deliverey On March 03
                    </span>
                </p>}

            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard