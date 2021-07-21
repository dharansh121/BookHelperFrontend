import history from "../history";
import axios from "../axios";

export const getMyCollection =
  (setFilteredCollection, setAllBook) => async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("user");
      const currentUserId = localStorage.getItem("user_id");
      const response = await axios.get("/books/userCollection", {
        params: {
          _id: currentUserId,
        },
        headers: {
          "auth-token": token,
        },
      });
      console.log(response.data);
      setAllBook(response.data);
      setFilteredCollection(response.data);
      dispatch({ type: "getMyCollection", payload: response.data });
    } catch (e) {
      console.log(e);
      console.log(e.response.data);
      if (
        e.response.data === "Invalid Token" ||
        e.response.data === "Access denied"
      ) {
        history.push("/login");
      }
    }
  };

  export const deleteInCollcetion =
  (book) => async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("user");
      const currentUserId = localStorage.getItem("user_id");
      const response = await axios.delete("/books/deleteBook", {
        headers: {
          "auth-token": token,
        },
        data: {
          book: book._id
        }
      });
      console.log(response.data);
      dispatch({ type: "deleteInCollection", payload: book });
      history.push("/myCollection")
    } catch (e) {
      console.log(e);
      console.log(e.response.data);
      if (
        e.response.data === "Invalid Token" ||
        e.response.data === "Access denied"
      ) {
        history.push("/");
      }
    }
  };