import React from "react";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FacebookIcon from "@material-ui/icons/Facebook";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { DriveEtaOutlined } from "@material-ui/icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  animated: {
    willChange: "transform",
    animation: "$up-down 2s ease-in-out infinite alternate-reverse both",
  },

  "@keyframes up-down": {
    "0%": {
      transform: "translateY(10px)",
    },
    "100%": {
      transform: "translateY(-10px)",
    },
  },
  getStarted: {},
}));
const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div id="Hero">
      <div style={{ padding: "30px" }}>
        <Grid container justify="center" alignItems="center">
          <Grid item md={6}>
            <Grid
              container
              justify={`${isMobile ? "center" : "flex-start"}`}
              alignItems="center"
            >
              <Typography variant="h4">Welcome to StudentHelper!!</Typography>
              <Typography variant="h2">
                <span style={{ color: "green" }}>Unzip</span> your Needs Here
              </Typography>
              <Typography variant="h6">
                Make the Most out of your Student Life by making it Easier
              </Typography>
              <Grid
                container
                justify="center"
                alignItems="flex-start"
                spacing={1}
                style={{ paddingBlock: "20px" }}
              >
                <Grid item xs={7} md={4} style={{ marginBlock: "10px" }}>
                  <Grid
                    container
                    justify="flex-start"
                    direction="column"
                    alignItems="center"
                  >
                    <Grid item>
                      <FacebookIcon />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" align="center">
                        Make better interaction and grow your network within
                        University at StudentHelper Network
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={7} md={4} style={{ marginBlock: "10px" }}>
                  <Grid
                    container
                    justify="flex-start"
                    direction="column"
                    alignItems="center"
                  >
                    <Grid item>
                      <AccountBalanceWalletIcon />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" align="center">
                        Save money at StudentHelper Store
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={7} md={4} style={{ marginBlock: "10px" }}>
                  <Grid
                    container
                    justify="flex-start"
                    direction="column"
                    alignItems="center"
                  >
                    <Grid item>
                      <QueryBuilderIcon />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" align="center">
                        Save Time at StudentHelper Calculator
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Button
                style={{ marginBlock: "5px" }}
                variant="outlined"
                endIcon={<ArrowForwardIosIcon style={{ fontSize: "15px" }} />}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <center>
              <div style={{ maxWidth: "280px" }}>
                <img
                  className={classes.animated}
                  src="./images/home.svg"
                  width="100%"
                  height={`${isMobile ? "100%" : "450"}`}
                  alt="Home"
                />
              </div>
            </center>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
