import history from "../history";
import axios from "../axios";

export const getWishList = () => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("user");
    const response = await axios.get("/books/getWishList", {
      headers: {
        "auth-token": token,
      },
    });
    console.log(response.data);
    // setWishBooks(response.data);
    dispatch({ type: "getWishList", payload: response.data });
  } catch (e) {
    console.log(e);
    if (
      e.response.data === "Invalid Token" ||
      e.response.data === "Access denied"
    ) {
      history.push("/login");
    }
  }
};

export const addtoWishList = (bookparam) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("user");
    const response = await axios.post(
      "/books/addToWishList",
      JSON.stringify({ book: bookparam._id }),
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      }
    );
    console.log("addwish request is made properly");
    console.log(bookparam);
    dispatch({ type: "addToWishList", payload: bookparam });
  } catch (e) {
    console.log(e);
  }
};

export const removeFromWishList = (bookparam) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("user");
    const response = await axios.post(
      "/books/removeFromWishList",
      JSON.stringify({ book: bookparam._id }),
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      }
    );
    console.log("removewish request is made properly");
    dispatch({ type: "removeFromWishList", payload: bookparam });
  } catch (e) {
    console.log(e);
  }
};
