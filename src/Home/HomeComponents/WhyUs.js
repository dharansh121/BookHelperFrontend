import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./AboutUs.css";
import PersonIcon from "@material-ui/icons/Person";
import Divider from "@material-ui/core/Divider";
import SchoolIcon from "@material-ui/icons/School";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneDisabledIcon from "@material-ui/icons/PhoneDisabled";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const useStyles = makeStyles((theme) => ({}));
const WhyUs = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "70px" }}>
      <div data-aos="fade-right">
        <Typography variant="h5" align="center">
          Why Us
        </Typography>
      </div>
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        style={{ marginBlock: "20px" }}
      >
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          spacing={1}
          md={11}
          xs={12}
        >
          <Grid item xs={12} md={3} style={{ marginBlock: "15px" }}>
            <Grid
              container
              justify="flex-start"
              direction="column"
              alignItems="center"
            >
              <div data-aos="fade-right">
                <Grid item>
                  <PhoneDisabledIcon />
                </Grid>
              </div>
              <div data-aos="fade-right">
                <Grid item>
                  <Typography variant="h5" align="center">
                    No mobile number
                  </Typography>
                </Grid>
              </div>
              <div data-aos="fade-right">
                <Grid item style={{ marginTop: "10px" }}>
                  <Typography variant="subtitle1" align="center">
                    Make better interaction and grow your network within
                    University at StudentHelper Network
                  </Typography>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} style={{ marginBlock: "15px" }}>
            <Grid
              container
              justify="flex-start"
              direction="column"
              alignItems="center"
            >
              <div data-aos="fade-right">
                <Grid item>
                  <AccountCircleIcon />
                </Grid>
              </div>
              <div data-aos="fade-right">
                <Grid item>
                  <Typography variant="h5" align="center">
                    Single Profile and Login when required
                  </Typography>
                </Grid>
              </div>
              <div data-aos="fade-right" data-aos-offset="70">
                <Grid item style={{ marginTop: "10px" }}>
                  <Typography variant="subtitle1" align="center">
                    Save money at StudentHelper Store
                  </Typography>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} style={{ marginBlock: "15px" }}>
            <Grid
              container
              justify="flex-start"
              direction="column"
              alignItems="center"
            >
              <Grid container justify="center" alignItems="center">
                <div data-aos="fade-right">
                  <Grid item>
                    <div style={{ borderRight: "1px solid" }}>
                      <ChatIcon style={{ marginRight: "4px" }} />
                    </div>
                  </Grid>
                </div>
                <div data-aos="fade-right">
                  <Grid item>
                    <LocationOnIcon />
                  </Grid>
                </div>
              </Grid>

              <div data-aos="fade-right">
                <Grid item>
                  <Typography variant="h5" align="center">
                    Easily connect with Chat and Map
                  </Typography>
                </Grid>
              </div>
              <div data-aos="fade-right" data-aos-offset="70">
                <Grid item style={{ marginTop: "10px" }}>
                  <Typography variant="subtitle1" align="center">
                    Save Time at StudentHelper Calculator
                  </Typography>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} style={{ marginBlock: "15px" }}>
            <Grid
              container
              justify="flex-start"
              direction="column"
              alignItems="center"
            >
              <div data-aos="fade-right">
                <Grid item>
                  <MobileFriendlyIcon />
                </Grid>
              </div>
              <div data-aos="fade-right">
                <Grid item>
                  <Typography variant="h5" align="center">
                    User Friendly
                  </Typography>
                </Grid>
              </div>
              <div data-aos="fade-right">
                <Grid item style={{ marginTop: "10px" }}>
                  <Typography variant="subtitle1" align="center">
                    Save money at StudentHelper Store
                  </Typography>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyUs;
