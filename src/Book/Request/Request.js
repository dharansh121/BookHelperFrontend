import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BookNavbar from "../BookNavbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MySent from "./MySent";
import MyReceived from "./MyReceived";
import Grid from "@material-ui/core/Grid";
import SendIcon from "@material-ui/icons/Send";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
const useStyles = makeStyles((theme) => ({}));
const Request = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <BookNavbar />
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        centered
        aria-label="icon label tabs example"
        style={{
          marginInline: `${isMobile ? "" : "200px"}`,
          marginTop: "10px",
        }}
      >
        <Tab icon={<SendIcon />} label="Sent Requests" />
        <Tab icon={<CallReceivedIcon />} label="Received Requests" />
      </Tabs>
      {value == 0 ? <MySent /> : <MyReceived />}
    </div>
  );
};

export default Request;
