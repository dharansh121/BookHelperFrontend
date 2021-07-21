import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import { NavLink, NavNavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import history from "../history";
import { connect } from "react-redux";
import { logout } from "../actions/loginAction";

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

const BookNavbar = (props) => {
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
                    <NavLink
                      to="/collection"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography variant="subtitle1">Buy Book</Typography>
                    </NavLink>
                    <NavLink
                      to="/myCollection"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography variant="subtitle1">My Active Ad</Typography>
                    </NavLink>
                    <NavLink to="/request" style={{ textDecoration: "none" }}>
                      <Typography variant="subtitle1">Requests</Typography>
                    </NavLink>
                    <NavLink to="/trades" style={{ textDecoration: "none" }}>
                      <Typography variant="subtitle1">Trade History</Typography>
                    </NavLink>
                    <NavLink to="/wishlist" style={{ textDecoration: "none" }}>
                      <Typography variant="subtitle1">Wishlist</Typography>
                    </NavLink>
                    <Button
                      variant="outlined"
                      style={{ marginTop: "12px", color: "green" }}
                      onClick={() => {
                        history.push("/signUp");
                      }}
                    >
                      <Typography variant="subtitle1">Sign Up</Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      style={{ marginTop: "18px", color: "green" }}
                      onClick={() => {
                        history.push("/login");
                      }}
                    >
                      <Typography variant="subtitle1">Login</Typography>
                    </Button>
                  </div>
                </Drawer>
              </div>
            ) : (
              <div className={classes.headerOption}>
                <NavLink to="/home" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1">Home</Typography>
                </NavLink>
                <NavLink to="/collection" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1">Buy Book</Typography>
                </NavLink>
                <NavLink to="/myCollection" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1">My Active Ad</Typography>
                </NavLink>
                <NavLink to="/request" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1">Requests</Typography>
                </NavLink>
                <NavLink to="/trades" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1">Trade History</Typography>
                </NavLink>
                <NavLink to="/wishlist" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1">Wishlist</Typography>
                </NavLink>
                <NavLink to="/recentUsers" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1">Recent Users</Typography>
                </NavLink>
                {/* <Button
                  variant="outlined"
                  style={{ marginLeft: "5px", color: "green" }}
                  onClick={() => {
                    history.push("/signUp");
                  }}
                >
                  <Typography variant="subtitle1">Sign Up</Typography>
                </Button> */}
                {props.isSignedIn ? (
                  <Button
                    variant="outlined"
                    style={{ marginLeft: "12px", color: "green" }}
                    onClick={() => {
                      localStorage.clear()
                      props.logout()
                      history.push("/");
                    }}
                  >
                    <Typography variant="subtitle1">Logout</Typography>
                  </Button>
                ) : (
                  <div>
                  <Button
                    variant="outlined"
                    style={{ marginLeft: "5px", color: "green" }}
                    onClick={() => {
                      history.push("/signUp");
                    }}
                  >
                    <Typography variant="subtitle1">Sign Up</Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    style={{ marginLeft: "12px", color: "green" }}
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    <Typography variant="subtitle1">Login</Typography>
                  </Button>
                  </div>
                )}
                {/* <Button
                  variant="outlined"
                  style={{ marginLeft: "12px", color: "green" }}
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  <Typography variant="subtitle1">Login</Typography>
                </Button>
                <Button
                  variant="outlined"
                  style={{ marginLeft: "12px", color: "green" }}
                  onClick={() => {
                    localStorage.clear()
                    props.logout()
                    history.push("/");
                  }}
                >
                  <Typography variant="subtitle1">Logout</Typography>
                </Button> */}
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.login.isSignedIn,
  };
};

export default connect( mapStateToProps, { logout })(BookNavbar);

