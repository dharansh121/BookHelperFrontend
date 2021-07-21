import React from "react";
import Grid from "@material-ui/core/Grid";
import OptionCard from "./OptionCard";

import Typography from "@material-ui/core/Typography";
const Options = () => {
  return (
    <div id="Options">
      <div style={{ backgroundColor: "gray", paddingBlock: "30px" }}>
        <Typography variant="h5" align="center" data-aos="fade-up">
          Options
        </Typography>
        <Grid container justify="center" alignItems="center">
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} lg={4} style={{ marginBlock: "5px" }}>
              <center>
                <OptionCard
                  optionName="StudentHelper Network"
                  optionDescription="Have a question, have an idea, wants to get updated with ongoing events in the university, or want to interact with peers and grow a network within a university, StudentHelper network is the answer to these questions. Explore now and enhance your college journey."
                  buttonText="Discover Now"
                  photo="./images/network.jpg"
                />
              </center>
            </Grid>

            <Grid item xs={12} lg={4} style={{ marginBlock: "5px" }}>
              <center>
                <OptionCard
                  optionName="StudentHelper Store"
                  optionDescription="Want to buy or sell some college stuff or books, StudentHelper store is a place of your need. Here you can buy from peers or sell to peers and can save money, also by reusing stuff make some contribution towards the healthy environment because every step counts."
                  buttonText="Get the best deal"
                  photo="./images/store.jpg"
                />
              </center>
            </Grid>
            <Grid item xs={12} lg={4} style={{ marginBlock: "5px" }}>
              <center>
                <OptionCard
                  optionName="StudentHelper Calculator"
                  optionDescription="Have a question, have an idea, wants to get updated with ongoing events in the university, or want to interact with peers and grow a network within a university, StudentHelper network is the answer to these questions. Explore now and enhance your college journey."
                  buttonText="Take me there"
                  photo="./images/calculator.jpg"
                />
              </center>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Options;
