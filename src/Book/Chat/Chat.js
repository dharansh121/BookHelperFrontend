import React, { useContext, useEffect, useRef, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BookNavbar from '../BookNavbar'
import ChatForm from "./ChatForm";
import axios from "../../axios";
import { io } from "socket.io-client";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import RecentUsers from '../RecentUsers/RecentUsers'
import CustomizedSnackbars from "../../CustomizedSnackbars";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Chat = (props) => {
  console.log(props)
  const [id, setId] = useState(props.location.state.owner);
  console.log("cehcging whether the id is appsing by params or not",id)
  const [name,setName] = useState(props.location.state.ownerName)
  const [messages, SetMessages] = useState([]);
  const scrollRef = useRef();
  const socket = useRef();
  const currentUserId = localStorage.getItem("user_id");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  var snackbarMessage = "other user!"

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      mounted.current = true;
    } else {
      console.log(messages);
    }
  });

  useEffect(() => {
    setId(id);
    return function cleanup() {
      console.log("routes has chnages now its time for disconnection");
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.current = io("http://localhost:5000");
    socket.current.emit("addUser", currentUserId);
    socket.current.on("getMessage", (data) => {
      // setArrivalMessage({
      //   sender: data.senderId,
      //   text: data.text,
      //   createdAt: Date.now(),
      // });

      if(!(data.senderId === id)){
        snackbarMessage = String(data.senderName)
        handleClick()
        console.log(snackbarMessage)
        return
      }

      const arrivedMessage = {
        content: data.text,
        receiver: currentUserId,
        sender: data.senderId,
        createdAt: Date.now(),
      };
      console.log(data);
      console.log(messages);
      console.log(arrivedMessage);
      SetMessages((prev) => [...prev, arrivedMessage]);
      // SetMessages([...messages,arrivedMessage])
      //console.log(data)
    });

    async function fetchMessage() {
      const token = localStorage.getItem("user");
      const response = await axios.get("/books/getMessage", {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        params: {
          id: id,
        },
      });
      //console.log(response)
      SetMessages(response.data);
    }
    console.log(messages);
    fetchMessage();
    console.log(messages);
  }, [id]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSendButton = async (content) => {
    //console.log("here i am in the props function")

    socket.current.emit("sendMessage", {
      senderId: currentUserId,
      receiverId: id,
      senderName : name,
      text: content,
    });

    const newMesage = {
      sender : currentUserId,
      receiver : id,
      content : content,
      createdAt : Date.now()
    }

    console.log(content);
    const token = localStorage.getItem("user");
    const response = await axios.post(
      "/books/addMessage",
      { receiver: id, content: content },
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      }
    );
    //console.log(response)
    // SetMessages([...messages, response.data]);
    SetMessages((prev) => [...prev, newMesage]);
  };

  const renderMessages = () => {
    return messages.map((response) => {
      return (
        <div
          ref={scrollRef}
          style={{
            border: "5px solid red",
            padding: "10px",
            color: response.sender === id ? "green" : "blue",
            textAlign: response.sender === id ? "left" : "right",
          }}
        >
          <h3>Content : {response.content}</h3>
          {/* <h2>sender : {response.sender}</h2>
          <h3>receiver : {response.receiver}</h3> */}
          <h6>date : {response.createdAt}</h6>
        </div>
      );
    });
  };

  return (
    <div>
      <BookNavbar />
      <div style={{ margin: "30px" }}>
        <Typography variant="subtitle1">
          OwnerId - {id}
        </Typography>
        <Typography variant="subtitle1">
          OwnerName - {name}
        </Typography>
        <>
          <h1>all messages</h1>
        </>
        <div style={{ height: "300px", width: "100%", overflow: "scroll" }}>
          {renderMessages()}
        </div>
        <ChatForm onSendButton={onSendButton} />
        <RecentUsers />
          <Snackbar className={classes.root} open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info">
              There is message from {snackbarMessage}
            </Alert>
          </Snackbar>
        
      </div>
    </div>
  );
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" />;
}

export default Chat;