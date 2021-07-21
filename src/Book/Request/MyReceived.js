import React, { useEffect } from "react";
import BookCard from "../Card/BookCard";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { myReceived } from "../../actions/requestAction";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BookNavbar from "../BookNavbar";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({}));

const MyReceived = (props) => {
  const classes = useStyles();
  useEffect(() => {
    props.myReceived();
  }, []);

  const card = ({ book, from, to, _id }) => {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Book - {book}
          </Typography>
          <Typography variant="h5" gutterBottom>
            From - {from}
          </Typography>
          <Typography variant="h5" gutterBottom>
            To - {to}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Accept</Button>
          <Button size="small">Reject</Button>
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
        {props.myReceivedReq? (
          props.myReceivedReq.map((myReceived) => {
            return (
              <Grid item key={myReceived._id}>
                <BookCard
                  book={myReceived.book}
                  reqDate={myReceived.requestedAt}
                  to=""
                  from={myReceived.from}
                  fromName={myReceived.fromName}
                  tradeDate=""
                  reqId={myReceived._id}
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
    myReceivedReq: Object.values(state.receivedRequest),
  };
};

export default connect(mapStateToProps, {
  myReceived,
})(MyReceived);
