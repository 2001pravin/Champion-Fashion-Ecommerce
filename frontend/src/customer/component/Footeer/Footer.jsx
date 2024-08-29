import { Button, Grid, Typography } from "@mui/material";
import React from "react";
const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black  text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              press{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              jobs{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              partners{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="6">
            {" "}
            Solution{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              Marketing{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              Analytics{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              Commerce{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              Insights{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              Supports{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="6">
            {" "}
            Documentation{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              Guides{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              API Status{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="6">
            {" "}
            Legal{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              Claim{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="6">
              {" "}
              Terms{" "}
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            from{" "}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
