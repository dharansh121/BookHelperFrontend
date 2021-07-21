import history from "../history";
import axios from "../axios";

export const getRecentUsers =
  () => async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get("/users/recentUsers", {
        headers: {
          "auth-token": token,
        },
      });
      console.log(response.data);
      dispatch({ type: "getRecentUsers", payload: response.data });
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
