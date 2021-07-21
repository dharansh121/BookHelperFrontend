import axios from "../axios";
import history from "../history";
export const mySent = (values) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("user");
    const response = await axios.get("/books/mySentRequest", {
      headers: {
        "auth-token": token,
      },
    });
    console.log(response.data);

    dispatch({ type: "mySent", payload: response.data });
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

export const myReceived = (values) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("user");
    const response = await axios.get("/books/myReceivedRequest", {
      headers: {
        "auth-token": token,
      },
    });
    console.log(response.data);

    dispatch({ type: "myReceived", payload: response.data });
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

export const deleteRequest = (id) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("user");
    await axios.delete(`/books/deleteRequest`, {
      headers: {
        "auth-token": token,
      },
      params: {
        id: id,
      },
    });
    // console.log(id);
    dispatch({ type: "deleteRequest", payload: id });
    // history.push("/collection");
  } catch (e) {
    console.log(e);
  }
};

export const confirmRequest = (id) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("user");
    console.log(id);
    // id = id.toString();
    const response = await axios.post(
      "/books/confirmRequest",
      { id: id },
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      }
    );

    dispatch({ type: "confirmRequest", payload: id });
    history.push("/trades");
  } catch (e) {
    console.log(e);
  }
};
