import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import { Link as LinkS, animateScroll } from "react-scroll";
import history from "../../history";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  menuButton: {
    color: "black",
  },
  drawerOption: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginInline: "25px",
    marginTop: "20px",
    "& a": {
      color: "black",
      display: "flex",
      justifyContent: "center",
      borderBottom: "4px solid white",
      margin: "7px",
      "&:hover": {
        color: "green",
      },
    },
    "& a.active": {
      borderBottom: "4px solid rgba(0,128,0, 1)",
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: "bold",
    },
  },
  toolbar: theme.mixins.toolbar,
  headerOption: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    "& a": {
      color: "black",
      height: "90%",
      display: "flex",
      alignItems: "center",
      borderBottom: "4px solid rgba(0,128,0, 0)",
      margin: "7px",
      "&:hover": {
        color: "green",
        // borderBottom: "4px solid rgba(0,128,0, 1)",
      },
    },
    "& a.active": {
      borderBottom: "4px solid rgba(0,128,0, 1)",
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: "bold",
    },
  },
  appBarOption: {
    display: "flex",
    marginLeft: "auto",
    height: "100%",
  },
  closeMenuButton: {
    display: "flex",
    alignSelf: "center",
  },
  appBar: {},
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  useEffect(() => {
    setMobileOpen(false);
  }, [isMobile]);
  return (
    <div className={classes.root}>
      <AppBar
        style={{ backgroundColor: "white" }}
        // elevation
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <img
            src="./icon.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Typography
            variant="subtitle1"
            noWrap
            color="initial"
            style={{
              marginLeft: "5px",
              color: "black",
            }}
          >
            StudentHelper
          </Typography>
          <div className={classes.appBarOption}>
            {isMobile ? (
              <div style={{ marginRight: "10px" }}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                >
                  <IconButton
                    onClick={handleDrawerToggle}
                    className={classes.closeMenuButton}
                  >
                    <CloseIcon />
                  </IconButton>
                  <div className={classes.drawerOption}>
                    <LinkS
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={450}
                      to="Options"
                      style={{ cursor: "pointer" }}
                    >
                      <Typography variant="subtitle1">Get Started</Typography>
                    </LinkS>
                    <LinkS
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={450}
                      to="Features"
                      style={{ cursor: "pointer" }}
                    >
                      <Typography variant="subtitle1">Features</Typography>
                    </LinkS>
                    <LinkS
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={450}
                      to="AboutUs"
                      style={{ cursor: "pointer" }}
                    >
                      <Typography variant="subtitle1">About Us</Typography>
                    </LinkS>
                    {/* <Button
                      variant="outlined"
                      style={{ marginTop: "12px", color: "green" }}
                      onClick = {() => {
                        history.push('/signup')
                      }}
                    >
                      <Typography variant="subtitle1">Sign Up</Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      style={{ marginTop: "18px", color: "green" }}
                      onClick = {() => {
                        history.push('/login')
                      }}
                    >
                      <Typography variant="subtitle1">Login</Typography>
                    </Button> */}
                    <Button
                      variant="outlined"
                      style={{ marginTop: "12px", color: "green" }}
                      onClick = {() => {
                        history.push('/collection')
                      }}
                    >
                      <Typography variant="subtitle1">Book Helper</Typography>
                    </Button>
                  </div>
                </Drawer>
              </div>
            ) : (
              <div className={classes.headerOption}>
                <LinkS
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={450}
                  to="Options"
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="subtitle1">Get Started</Typography>
                </LinkS>
                <LinkS
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={450}
                  to="Features"
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="subtitle1">Features</Typography>
                </LinkS>
                <LinkS
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  to="AboutUs"
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="subtitle1">About Us</Typography>
                </LinkS>
                {/* <Button
                  variant="outlined"
                  style={{ marginLeft: "5px", color: "green" }}
                  onClick = {() => {
                    history.push('/signup')
                  }}
                >
                  <Typography variant="subtitle1">Sign Up</Typography>
                </Button>
                <Button
                  variant="outlined"
                  style={{ marginLeft: "12px", color: "green" }}
                  onClick = {() => {
                    history.push('/login')
                  }}
                >
                  <Typography variant="subtitle1">Login</Typography>
                </Button> */}
                <Button
                  variant="outlined"
                  style={{ marginLeft: "5px", color: "green" }}
                  onClick = {() => {
                    history.push('/collection')
                  }}
                >
                  <Typography variant="subtitle1">Book Helper</Typography>
                </Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
    </div>
  );
};

export default Navbar;
