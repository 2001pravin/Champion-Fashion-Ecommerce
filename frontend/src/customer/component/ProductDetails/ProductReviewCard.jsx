import React from "react";
import { Grid, Avatar, Box, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div className=" text-left">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              P
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className=" font-semibold text-lg">Pravin</p>
              <p className=" opacity-70">April 5 ,2023</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={4.5}></Rating>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
