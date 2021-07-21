import history from "../history";
import axios from "../axios";

export const addBook = (values) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("user");
    const response = await axios.post(
      "/books/addBook",
      JSON.stringify(values),
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      }
    );

    dispatch({ type: "addBook", payload: values });
    history.push("/myCollection");
  } catch (e) {
    console.log(e);
  }
};
