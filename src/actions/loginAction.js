import history from "../history";
import axios from "../axios";

export const login = (values) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/users/login", JSON.stringify(values), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("user", response.data.token);
    localStorage.setItem("user_id", response.data.user);
    localStorage.setItem("user_name",response.data.name)
    dispatch({ type: "login", payload: response.data });
    history.push("/collection");
  } catch (e) {
    console.log(e);
  }
};

export const signUp = (values) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      "/users/register",
      JSON.stringify(values),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // dispatch({ type: "signUp", payload: response.data.user });
    history.push("/login");
  } catch (e) {
    console.log(e);
  }
};

export const verifyLogin = () => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("user");
    const response = await axios.get("/users/checklogin", {
      headers: {
        "auth-token": token,
      },
    });
    dispatch({ type: "verifyLogin" });
  } catch (e) {
    console.log(e);
  }
};

export const logout = () => async (dispatch, getState) => {
  dispatch({ type: "logout" });
};