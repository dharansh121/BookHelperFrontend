import React, { useEffect } from "react";
import BookCard from "../Card/BookCard";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { mySent } from "../../actions/requestAction";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import BookNavbar from "../BookNavbar";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles((theme) => ({}));

const MySent = (props) => {
  const classes = useStyles();
  useEffect(() => {
    props.mySent();
  }, []);

  const card = ({ book, from, to, _id }) => {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Book_id - {book._id}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Book_title - {book.title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            From - {from}
          </Typography>
          <Typography variant="h5" gutterBottom>
            To - {to}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Accept</Button> */}
          <Button size="small">Cancel</Button>
        </CardActions>
      </Card>
    );
  };
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
          {props.mySentReq ? (
            props.mySentReq.map((mySent) => {
              return (
                <Grid item key={mySent._id}>
                  <BookCard
                    book={mySent.book}
                    reqDate={mySent.requestedAt}
                    to={mySent.to}
                    toName={mySent.toName}
                    from=""
                    fromName=""
                    tradeDate=""
                    reqId={mySent._id}
                  />
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
    mySentReq: Object.values(state.sentRequest),
  };
};

export default connect(mapStateToProps, { mySent })(MySent);
