import React, { useContext, useEffect, useRef, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BookNavbar from "./BookNavbar";
import Button from "@material-ui/core/Button";
import axios from "../axios";
import history from "../history";
import { Link } from "react-router-dom";
import UserProfile from "./ContactUser/UserProfile";
import { connect } from "react-redux";
import {
  addtoWishList,
  removeFromWishList,
} from "../actions/getWishListAction";
import { deleteInCollcetion } from "../actions/getMyCollectionAction";


const BookInfo = (props) => {
  console.log(props)
  console.log(props.location.state.book);
  const currentUserId = localStorage.getItem("user_id");
  console.log(currentUserId);
  const [book, setBook] = useState(props.location.state.book);
  console.log(props.location.state.book)
  useEffect(() => {
    console.log(book);
    // console.log(props.location.state.book)
  }, []);

  useEffect(() => {
    console.log("book state changed");
    console.log(book);
  }, [book]);

  // const addToWish = () => {
  //   console.log("add to wishlist");
  //   console.log(book.wishListedBy.concat([currentUserId]));
  //   console.log(book.wishListedBy);
  //   const updatedbook = {
  //     ...book,
  //     wishListedBy: book.wishListedBy.concat([currentUserId]),
  //   };
  //   props.addtoWishList(updatedbook);
  //   setBook(updatedbook);
  // };

  // const removeFromWish = () => {
  //   console.log("remove from wishlist");
  //   console.log(book.wishListedBy.filter((id) => id !== currentUserId));
  //   console.log(book.wishListedBy);
  //   props.removeFromWishList({
  //     ...book,
  //     wishListedBy: book.wishListedBy.filter((id) => id !== currentUserId),
  //   });
  //   setBook({
  //     ...book,
  //     wishListedBy: book.wishListedBy.filter((id) => id !== currentUserId),
  //   });
  // };

  const renderInfo = () => {
    // console.log(book)
    return (
      <div>
        <Typography variant="subtitle1">OwnerId - {book.owner}</Typography>
        <Typography variant="subtitle1">
          ownerName - {book.ownerName}
        </Typography>
        <Typography variant="subtitle1">category - {book.category}</Typography>
        <Typography variant="subtitle1">title - {book.title}</Typography>
        <Typography variant="subtitle1">
          sellingPrice - {book.sellingPrice}
        </Typography>
        <Typography variant="subtitle1">
          description - {book.description}
        </Typography>
        <img
          src={book.imageUrl ? book.imageUrl : "./images/book.jpg"}
          width="200"
          height="250"
          alt="Book"
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => addRequestButton()}
        >
          Add Request
        </Button>
        {book.owner === currentUserId ? (
          <Button
          variant="contained"
          color="primary"
          component={Link}
          to={{
            pathname: "/myCollection",
            state: { },
          }}
        >
          Contact Seller
        </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={{
              pathname: "/userProfile",
              state: {
                owner: book.owner,
                ownerName : book.ownerName
              }
            }}
          >
            Contact Seller
          </Button>
        )}
        {/* <Button
          variant="contained"
          color="primary"
          component={Link}
          to={{
            pathname: "/userProfile",
            state: {
              owner: book.owner,
              ownerName : book.ownerName
            },
          }}
        >
          Contact Seller
        </Button> */}

        {book.owner === currentUserId ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.deleteInCollcetion(book)}
          >
            Delete Book
          </Button>
        ) : (
          <>
          </>
        )}

      </div>
    );
  };

  const addRequestButton = async () => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.post(
        "/books/addRequest",
        JSON.stringify({
          to: book.owner,
          book: book._id,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        }
      );
      // console.log("hii")
      console.log(response);
      history.push("/request");
    } catch (error) {
      console.log(error.response);
      alert(error.response ? error.response.data : "error in posting request");
    }
  };

  return (
    <div>
      <BookNavbar />
      <div style={{ margin: "30px" }}>
        <>
          <h1>hi from book Info</h1>
        </>
        <>{renderInfo()}</>
      </div>
    </div>
  );
};

export default connect(null, { addtoWishList, removeFromWishList, deleteInCollcetion })(BookInfo);
