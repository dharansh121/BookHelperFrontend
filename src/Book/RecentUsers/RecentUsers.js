import React, { useEffect } from 'react'
import { getRecentUsers } from '../../actions/recentUsersAction';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import BookNavbar from "../BookNavbar";
import { CircularProgress } from '@material-ui/core';

const RecentUsers = (props) => {

  useEffect(() => {
    props.getRecentUsers()
  },[])

  return (
    <div>
      <BookNavbar />
      <div>
        Hi from recent users !!!
      </div>
      <br />
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={3}
        style={{ marginBlock: "10px" }}
      >
        {props.recentUsers ? (
          props.recentUsers.map((user) => {
            return (
              <Grid item key={user._id}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  // to={`/chat/:${user._id}`}
                  // to={{
                  //   pathname: "/userProfile",
                  //   state: {
                  //     owner: user._id,
                  //     ownerName : user.name
                  //   }
                  // }}
                  to = {{
                    pathname : `/userProfile/${user._id}`
                  }}
                >
                  Contact {user.name}
                </Button>
              </Grid>
            );
          })
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    recentUsers: Object.values(state.recentUsers),
  };
};

export default connect(mapStateToProps, { getRecentUsers })(RecentUsers);