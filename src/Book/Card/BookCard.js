import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SchoolIcon from "@material-ui/icons/School";
import "./BookCard.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";
import InfoIcon from "@material-ui/icons/Info";
import EventIcon from "@material-ui/icons/Event";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import { deleteRequest, confirmRequest } from "../../actions/requestAction";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import {
  addtoWishList,
  removeFromWishList,
} from "../../actions/getWishListAction";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const BookCard = (props) => {
  console.log(props)
  const [book, setBook] = useState(props.book);
  const currentUserId = localStorage.getItem("user_id");
  const isMobile = useMediaQuery("(max-width:330px)");
  const addToWish = () => {
    console.log("add to wishlist");
    console.log(book.wishListedBy.concat([currentUserId]));
    console.log(book.wishListedBy);
    const updatedbook = {
      ...book,
      wishListedBy: book.wishListedBy.concat([currentUserId]),
    };
    props.addtoWishList(updatedbook);
    setBook(updatedbook);
  };

  const removeFromWish = () => {
    console.log("remove from wishlist");
    console.log(book.wishListedBy.filter((id) => id !== currentUserId));
    console.log(book.wishListedBy);
    props.removeFromWishList({
      ...book,
      wishListedBy: book.wishListedBy.filter((id) => id !== currentUserId),
    });
    setBook({
      ...book,
      wishListedBy: book.wishListedBy.filter((id) => id !== currentUserId),
    });
  };
  const card = () => {
    // console.log(props.book);
    return (
      <div className="bookCard_card">
        <center>
          <div className="bookCard_div">
            <div className="bookCard_content">
              {props.reqDate !== "" ? (
                <div
                  style={{
                    borderBottom: "1px solid #d5d5d5",
                    paddingBottom: "5px",
                  }}
                >
                  <div className="bookCard_primary-text">
                    <Typography variant="h6" className="bookCard_overflow-text">
                      Request
                    </Typography>
                  </div>
                  <div className="bookCard_together bookCard_secondary-text">
                    <PersonPinCircleIcon style={{ fontSize: "20px" }} />
                    <Typography
                      variant="subtitle-1"
                      style={{ marginLeft: "8px" }}
                      className="bookCard_overflow-text"
                    >
                      {props.to !== ""
                        ? `To : ${props.toName}`
                        : `From : ${props.fromName}`}
                    </Typography>
                  </div>
                  <div
                    className="bookCard_together bookCard_secondary-text"
                    style={{ marginTop: "3px" }}
                  >
                    <EventIcon style={{ fontSize: "20px" }} />
                    <Typography
                      variant="subtitle-1"
                      style={{ marginLeft: "8px" }}
                      className="bookCard_overflow-text"
                    >
                      {props.reqDate}
                    </Typography>
                  </div>
                  <div>
                    {props.to != "" ? (
                      <div>
                        <Button
                          onClick={() => {
                            props.deleteRequest(props.reqId);
                          }}
                          className="bookCard_background bookCard_secondary-text"
                          style={{
                            color: "#d5d5d5",
                            borderColor: "#d5d5d5",
                            marginBlock: "5px",
                          }}
                          variant="outlined"
                          // className="optionCard-cardButton"
                          startIcon={
                            <DeleteIcon style={{ fontSize: "15px" }} />
                          }
                        >
                          Delete
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="bookCard_together"
                        style={{ justifyContent: "space-between" }}
                      >
                        <Button
                          onClick={() => {
                            props.confirmRequest(props.reqId);
                          }}
                          className="bookCard_background bookCard_secondary-text"
                          style={{
                            color: "#d5d5d5",
                            borderColor: "#d5d5d5",
                            marginBlock: "5px",
                          }}
                          variant="outlined"
                          // className="optionCard-cardButton"
                          startIcon={
                            <CheckCircleIcon style={{ fontSize: "15px" }} />
                          }
                        >
                          Accept
                        </Button>
                        <Button
                          onClick={() => {
                            props.deleteRequest(props.reqId);
                          }}
                          className="bookCard_background bookCard_secondary-text"
                          style={{
                            color: "#d5d5d5",
                            borderColor: "#d5d5d5",
                            marginBlock: "5px",
                          }}
                          variant="outlined"
                          // className="optionCard-cardButton"
                          startIcon={
                            <CancelIcon style={{ fontSize: "15px" }} />
                          }
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
              {props.tradeDate !== "" ? (
                <div
                  style={{
                    borderBottom: "1px solid #d5d5d5",
                    paddingBottom: "10px",
                  }}
                >
                  <div className="bookCard_primary-text">
                    <Typography variant="h6" className="bookCard_overflow-text">
                      Trade
                    </Typography>
                  </div>
                  <div className="bookCard_together bookCard_secondary-text">
                    <PersonPinIcon style={{ fontSize: "20px" }} />
                    <Typography
                      variant="subtitle-1"
                      style={{ marginLeft: "8px" }}
                      className="bookCard_overflow-text"
                    >
                      Owner : {props.fromName}
                    </Typography>
                  </div>
                  <div
                    className="bookCard_together bookCard_secondary-text"
                    style={{ marginTop: "3px" }}
                  >
                    <PersonPinCircleIcon style={{ fontSize: "20px" }} />
                    <Typography
                      variant="subtitle-1"
                      style={{ marginLeft: "8px" }}
                      className="bookCard_overflow-text"
                    >
                      Buyer : {props.toName}
                    </Typography>
                  </div>
                  <div
                    className="bookCard_together bookCard_secondary-text"
                    style={{ marginTop: "3px" }}
                  >
                    <EventIcon style={{ fontSize: "20px" }} />
                    <Typography
                      variant="subtitle-1"
                      style={{ marginLeft: "8px" }}
                      className="bookCard_overflow-text"
                    >
                      {props.tradeDate}
                    </Typography>
                  </div>
                </div>
              ) : null}
              <div
                className="bookCard_together bookCard_primary-text"
                style={{
                  marginTop: "2px",
                }}
              >
                <Typography variant="h6" className="bookCard_overflow-text">
                  {props.book.title}
                </Typography>
              </div>
              <div
                className="bookCard_together bookCard_primary-text"
                style={{ justifyContent: "space-between", marginTop: "-4px" }}
              >
                <Typography variant="h6" className="bookCard_overflow-text">
                  {"₹"}
                  {props.book.sellingPrice}
                </Typography>
                {props.tradeDate ? null : book.wishListedBy.includes(currentUserId) ? (
                  <FavoriteIcon onClick={() => removeFromWish()} />
                ) : (
                  <FavoriteBorderIcon onClick={() => addToWish()} />
                )}
                {/* {book.wishListedBy.includes(currentUserId) ? (
                  <FavoriteIcon onClick={() => removeFromWish()} />
                ) : (
                  <FavoriteBorderIcon onClick={() => addToWish()} />
                )} */}
                {/* <FavoriteBorderIcon /> */}
              </div>
              <div className="bookCard_together bookCard_secondary-text">
                <Typography
                  variant="subtitle-1"
                  className="bookCard_overflow-text"
                >
                  {props.book.description}
                </Typography>
              </div>
              <div
                className="bookCard_together bookCard_secondary-text"
                style={{ marginTop: "3px" }}
              >
                <PersonIcon style={{ fontSize: "20px" }} />
                <Typography
                  variant="subtitle-1"
                  style={{ marginLeft: "8px" }}
                  className="bookCard_overflow-text"
                >
                  {props.book.ownerName}
                </Typography>
              </div>
              <div
                className="bookCard_together bookCard_secondary-text"
                style={{ marginTop: "3px" }}
              >
                <EventIcon style={{ fontSize: "20px" }} />
                <Typography
                  variant="subtitle-1"
                  style={{ marginLeft: "8px" }}
                  className="bookCard_overflow-text"
                >
                  {props.book.createdAt}
                </Typography>
              </div>
            </div>

            <div>
              <Button
                className="bookCard_background bookCard_secondary-text"
                style={{
                  color: "#d5d5d5",
                  borderColor: "#d5d5d5",
                  marginBlock: "8px",
                }}
                component={Link}
                // to={{
                //   pathname: "/bookInfo",
                //   state: {
                //     book: props.book,
                //   },
                // }}
                to = {`bookInfo/${book._id}`}
                variant="outlined"
                // className="optionCard-cardButton"
                startIcon={<InfoIcon style={{ fontSize: "15px" }} />}
                endIcon={<ArrowForwardIosIcon style={{ fontSize: "15px" }} />}
              >
                Book Info
              </Button>
              {/* <IconButton aria-label="mail">
                  <EmailIcon
                    className="bookCard_secondary-text"
                    fontSize="large"
                  />
                </IconButton> */}
            </div>
          </div>
        </center>
      </div>
    );
  };

  return (
    <div className="bookCard-container">
      <div className="bookCard-card-wrap">
        <div
          className="bookCard-card"
          style={{
            height: `${
              props.reqDate !== "" && isMobile
                ? "545px"
                : props.reqDate !== "" && !isMobile
                ? "520px"
                : props.tradeDate !== "" && isMobile
                ? "540px"
                : props.tradeDate !== "" && !isMobile
                ? "515px"
                : isMobile
                ? "450px"
                : "410px"
            }`,
          }}
        >
          <div
            className="bookCard-card-bg"
            style={{
              backgroundImage: `url(${props.book.imageUrl})`,
              // left: "-5px",
            }}
          ></div>
          <div className="bookCard-card-info">
            <div className="bookCard-book">
              <center>{card()}</center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  deleteRequest,
  confirmRequest,
  addtoWishList,
  removeFromWishList,
})(BookCard);
