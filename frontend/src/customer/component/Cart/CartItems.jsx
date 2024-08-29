import { Button, IconButton } from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from "react";

const CartItems = () => {
  return (
    <div>
      <div className="p-5 shadow-lg border rounded-md">
        <div className="flex items-center">
          <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:[9rem]">
            <img className="w-full h-full object-cover object-top" src="" />
          </div>
          <div className="ml-5 space-y-1">
            <p className="font-semibold">Men slim mid Rise Black Jens</p>
            <p className="opacity-70 text-left">size: L,White</p>
            <p className="opacity-70 mt-2 text-left">Seller: SK Fashion</p>
            <div className="flex space-x-5 items-center text-gray-900 pt-6">
              <p className=" font-semibold">₹199</p>
              <p className=" opacity-50 line-through"> ₹211</p>
              <p className="text-green-600 font-semibold">5% off</p>
            </div>
          </div>
        
        </div>
        <div className=" lg:flex items-center lg:space-x-10 pt-4">
            <div className=" flex items-center space-x-2">
               
                <IconButton  sx={{color:"RGB(145 85 253)"}} >
                <RemoveCircleIcon></RemoveCircleIcon>
                     
                </IconButton>  
               
                <span className="py-1 px-7 border rounded-sm">3</span>
                <IconButton sx={{color:"RGB(145 85 253)"}}>
                <AddCircleIcon></AddCircleIcon>
                     
                </IconButton>
               
            </div>
            <div>
                <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
            </div>

          </div>
      </div>
    </div>
  );
};

export default CartItems;
