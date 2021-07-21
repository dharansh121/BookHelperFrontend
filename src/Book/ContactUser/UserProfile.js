import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getCollection } from "../../actions/getCollectionAction";
import ContactUser from "../Chat/Chat";
import BookNavbar from "../BookNavbar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BookCard from "../Card/BookCard";
import history from "../../history";
import axios from "../../axios";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  addBook: {
    display: "flex",
    justifyContent: "center",
  },
  main: {
    margin: "10px",
  },
  root: {
    maxWidth: 250,
  },
  center: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));


const UserProfile = (props) => {

  const [allbook, setAllBook] = useState([]);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [firstTime, setFirstTime] = useState(true);
  const [sortType, setSortType] = useState(1);
  const [user,setUser] = useState(null)
  console.log(props)
  const userId = props.match.params.id;
  // const userName = props.location.state.ownerName;
  // console.log(props.location.state.owner);
  // console.log(props.location.state.ownerName);
  // console.log(props.location.state.owner)
  useEffect(() => {
    
    // props.getCollection(setFilteredCollection, setAllBook);
    
    const fetchUserBooks = async () => {
      try {
        const token = localStorage.getItem("user");
        const response = await axios.get("/books/userCollection", {
          headers: {
            "auth-token": token,
          },
          params : {
            _id : userId
          },
        });
        console.log(response.data);
        setAllBook(response.data);
        setFilteredCollection(response.data);
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
    }

    const fetchUserDetails = async () => {
      console.log("lol")
      try {
        const token = localStorage.getItem("user");
        const response = await axios.get("/users/userInfo", {
          headers: {
            "auth-token": token,
          },
          params : {
            _id : userId
          },
        });
        console.log(response.data);
        setUser(response.data)
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
    }

    fetchUserBooks()
    fetchUserDetails()
  }, []);

  useEffect(() => {});

  const classes = useStyles();

  // component={Link}
  //           to={{
  //             pathname: "/chat",
  //             state: {
  //               ownerId: owner,
  //             },
  //           }}

  // to={{
  //   pathname: "/bookInfo",
  //   state: {
  //     book: book,
  //   },
  // }}

  const handleSearch = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSortType(event.target.value);
  };

  useEffect(() => {
    //changing first the all books
    if (sortType === 1) {
      const sorted = [...allbook].sort((b, a) => b.createdAt - a.createdAt);
      // sorted.reverse();
      console.log(sorted);
      setFilteredCollection(sorted);
    } else if (sortType === 2) {
      const sorted = [...allbook].sort((b, a) => b.createdAt - a.createdAt);
      sorted.reverse();
      console.log(sorted);
      setFilteredCollection(sorted);
    } else if (sortType === 3) {
      const sorted = [...allbook].sort(
        (b, a) => b.sellingPrice - a.sellingPrice
      );
      sorted.reverse();
      console.log(sorted);
      setFilteredCollection(sorted);
    } else if (sortType === 4) {
      const sorted = [...allbook].sort(
        (b, a) => b.sellingPrice - a.sellingPrice
      );
      // sorted.reverse();
      console.log(sorted);
      setFilteredCollection(sorted);
    }
    //then changing the inputu to same input so as the filtering is done properly in the sorted manner
  }, [sortType]);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
      return;
    }
    // console.log("is it coming here???")
    const timerId = setTimeout(() => {
      let value = searchInput;
      let result = [];
      console.log(value);
      // if(value === "" ){
      //   setFilteredCollection(props.collection)
      //   return
      // }
      result = allbook.filter((data) => {
        return (
          data.title.toLowerCase().search(value) != -1 ||
          data.description.toLowerCase().search(value) != -1
        );
      });
      setFilteredCollection(result);
      setSortType(1);
      console.log(filteredCollection);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [searchInput]);

  // useEffect(() => {
  //   console.log(allbook)
  //   console.log(filteredCollection)
  // },[allbook,filteredCollection])

  // console.log("all book = ",allbook)
  // console.log("filtered book = ",allbook)
  return (
    <div>
      <BookNavbar />
      {user ? (
        <div className={classes.main}>
        <div>
          <div>
            <label>Search:</label>
            <input
              type="text"
              value={searchInput}
              onChange={(event) => handleSearch(event)}
            />
          </div>
          <div>
            <label>sort : </label>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Sort Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortType}
                onChange={handleChange}
              >
                <MenuItem value={1}>oldfirst : date</MenuItem>
                <MenuItem value={2}>newestfirst : date</MenuItem>
                <MenuItem value={3}>high-to-low : price</MenuItem>
                <MenuItem value={4}>low-to-high : price</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="subtitle1">
              ownerName - {user.name}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              // to={{
              //   pathname: "/chat",
              //   state: {
              //     owner: userId,
              //     ownerName : user.name
              //   },
              // }}
              to={`/chat/${userId}`}
            >
              Chat with Seller
            </Button>
          </div>
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={3}
            style={{ marginBlock: "10px" }}
          >
            {filteredCollection ? (
              filteredCollection.map((collection) => {
                return (
                  <Grid item key={collection._id}>
                    <BookCard book={collection} reqDate="" tradeDate="" />
                    {/* {card(collection)} */}
                  </Grid>
                );
              })
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </div>
      </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default connect(null, {})(UserProfile);

// export default UserProfile;