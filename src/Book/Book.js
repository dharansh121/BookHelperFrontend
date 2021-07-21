import React from "react";
import Grid from "@material-ui/core/Grid";
import BookCard from "./Card/BookCard";

import Typography from "@material-ui/core/Typography";
const Book = () => {
  return (
    <div id="Options">
      <div style={{ backgroundColor: "gray", paddingBlock: "30px" }}>
        <Grid container justify="center" alignItems="center">
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} lg={4} style={{ marginBlock: "5px" }}>
              <center>
                <BookCard
                  bookName="Jain and Jain"
                  bookDescription="Have a question, have an idea, wants to get updated with ongoing events in the university, or want to interact with peers and grow a network within a university, StudentHelper network is the answer to these questions. Explore now and enhance your college journey."
                  photo="./images/Book1.jpg"
                  date="9 July, 2021"
                  owner="Shivam Bhalodia"
                  price="123"
                  reqDate=""
                  to=""
                  from=""
                  tradeDate=""
                />
              </center>
            </Grid>

            <Grid item xs={12} lg={4} style={{ marginBlock: "5px" }}>
              <center>
                <BookCard
                  bookName="Harry Potter"
                  bookDescription="Want to buy or sell some college stuff or books, StudentHelper store is a place of your need. Here you can buy from peers or sell to peers and can save money, also by reusing stuff make some contribution towards the healthy environment because every step counts."
                  photo="./images/Book3.jpg"
                  date="9 July, 2021"
                  owner="Dharansh"
                  price="123"
                  reqDate=""
                  to=""
                  from=""
                  tradeDate=""
                />
              </center>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Book;
