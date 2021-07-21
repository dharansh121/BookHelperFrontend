import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BookNavbar from "../BookNavbar";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import BookCard from "../Card/BookCard";
import { getCollection } from "../../actions/getCollectionAction";
import ContactUser from "../Chat/Chat";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getWishList } from "../../actions/getWishListAction";
import CircularProgress from "@material-ui/core/CircularProgress";

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
const Wishlist = (props) => {
  
  const [wishBooks, setWishBooks] = useState(null);

  useEffect(() => {
    // console.log("hii from initial use effect of collection before getcollectionaction")
    props.getWishList();
    // setTimeout(() => timeOutCallback(props.collection),2000)
    // console.log(props.collection)
    // console.log("hii from initial use effect of collection")
    // setFilteredCollection(props.collection)
    // console.log(filteredCollection)
  }, []);

  const classes = useStyles();

  const card = (book) => {
    const { title, category, sellingPrice, description, owner, imageUrl } =
      book;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <img
              className={classes.center}
              src={imageUrl ? imageUrl : "./images/book.jpg"}
              width="200"
              height="250"
              alt="Book"
            />
            <Grid
              style={{ marginBlock: "10px" }}
              container
              justify="center"
              alignItems="center"
              alignContent="space-between"
            >
              <Grid item xs={6}>
                <Typography gutterBottom variant="h5" component="h2" noWrap>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="right"
                >
                  ${sellingPrice}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="subtitle1" color="textSecondary" noWrap>
              {category}
            </Typography>
            <Typography variant="body2" color="textSecondary" noWrap>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button
            component={Link}
            to={{
              pathname: "/bookInfo",
              state: {
                book: book,
              },
            }}
            size="small"
            color="primary"
          >
            Book Info
          </Button>
          <Button
            component={Link}
            to={{
              pathname: "/chat",
              state: {
                ownerId: owner,
              },
            }}
            size="small"
            color="primary"
          >
            Chat with User
          </Button>
        </CardActions>
      </Card>
    );
  };

  // useEffect(() => {
  //   console.log(allbook)
  //   console.log(filteredCollection)
  // },[allbook,filteredCollection])

  // console.log("all book = ",allbook)
  // console.log("filtered book = ",allbook)
  return (
    <div>
      <BookNavbar />
      <div>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={3}
          style={{ marginBlock: "10px" }}
        >
          {props.wishListed ? (
            props.wishListed.map((collection) => {
              return (
                <Grid item key={collection._id}>
                  <BookCard book={collection} reqDate="" tradeDate="" />
                </Grid>
              );
            })
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wishListed: Object.values(state.wishList),
  };
};

export default connect(mapStateToProps, { getWishList })(Wishlist);
