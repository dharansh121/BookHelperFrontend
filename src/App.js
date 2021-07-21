import React, { useEffect } from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import AOS from "aos";
import Collection from "./Book/Collection/Collection";
import AddBook from "./Book/AddBook";
import Login from "./Auth/Login";
import Book from "./Book/Book";
import "aos/dist/aos.css";
import Home from "./Home/Home";
import UserProfile from "./Book/ContactUser/UserProfile";
import Trades from "./Book/Trade/Trades";
import BookInfo from "./Book/BookInfo";
import Request from "./Book/Request/Request";
import MyCollection from "./Book/Collection/MyCollection";
import Wishlist from "./Book/Wishlist/Wishlist";
import SignUp from "./Auth/SignUp";
import Chat from "./Book/Chat/Chat";
import RecentUsers from "./Book/RecentUsers/RecentUsers";
import { verifyLogin } from "./actions/loginAction";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const App = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    props.verifyLogin();
  }, []);
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/collection" exact component={Collection} />
          <Route path="/addBook" exact component={AddBook} />
          <Route path="/login" exact component={Login} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/" exact component={Collection} />
          <Route path="/book" exact component={Book} />
          <Route path="/trades" exact component={Trades} />
          <Route path="/bookInfo" exact component={BookInfo} />
          <Route path="/request" exact component={Request} />
          <Route path="/myCollection" exact component={MyCollection} />
          <Route path="/home" exact component={Home} />
          <Route path="/wishlist" exact component={Wishlist} />
          <Route path="/userProfile" exact component={UserProfile} />
          <Route path="/recentUsers" exact component={RecentUsers} />
          {/* <Route path="/collection" exact component={Collection} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/" exact component={Collection} />
          <Route path="/bookInfo" exact component={BookInfo} />
          <Route
            path="/addBook"
            exact
            render={() => {
              return props.isSignedIn ? <AddBook /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/chat"
            exact
            render={() => {
              return props.isSignedIn ? <Chat /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/trades"
            exact
            render={() => {
              return props.isSignedIn ? <Trades /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/request"
            exact
            render={() => {
              return props.isSignedIn ? <Request /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/wishlist"
            exact
            render={() => {
              return props.isSignedIn ? <Wishlist /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/userProfile"
            exact
            render={() => {
              return props.isSignedIn ? <UserProfile /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/recentUsers"
            exact
            render={() => {
              return props.isSignedIn ? <RecentUsers /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/myCollection"
            exact
            render={() => {
              return props.isSignedIn ? <MyCollection /> : <Redirect to="/login" />;
            }}
          /> */}
        </div>
      </Router>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.login.isSignedIn,
  };
};
export default connect(mapStateToProps, { verifyLogin })(App);
