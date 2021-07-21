import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import ChatIcon from "@material-ui/icons/Chat";
import SendIcon from "@material-ui/icons/Send";
import FilterListIcon from "@material-ui/icons/FilterList";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
const useStyles = makeStyles((theme) => ({
  itemText: {
    marginLeft: "-12px",
  },
  list: {
    maxWidth: "320px",
  },
}));
const Features = () => {
  const classes = useStyles();

  return (
    <div id="Features">
      <div style={{ paddingBlock: "30px" }}>
        <div data-aos="fade-right" data-aos-offset="0">
          <Typography variant="h5" align="center">
            Features
          </Typography>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Grid
              container
              justify="center"
              alignItems="flex-start"
              // spacing={1}

              lg={10}
              md={11}
              xs={12}
            >
              <Grid
                container
                justify="center"
                direction="column"
                alignItems="center"
                xs={12}
                md={4}
                style={{ marginBlock: "20px" }}
              >
                <Grid item>
                  <div data-aos="fade-right">
                    <Typography variant="h6" align="start">
                      StudentHelper Network
                    </Typography>
                  </div>
                </Grid>

                <Grid item>
                  <List
                    dense
                    className={classes.list}

                    // style={{ backgroundColor: "black" }}
                  >
                    <div data-aos="fade-right" data-aos-offset="70">
                      <ListItem>
                        <ListItemIcon>
                          <AddPhotoAlternateIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Ask/Answer Question"
                          className={classes.itemText}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <QuestionAnswerIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.itemText}
                          primary="Connect with others via Chat or meet them using Map"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FilterListIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.itemText}
                          primary="Filter Feed by different spaces and University"
                        />
                      </ListItem>
                    </div>
                  </List>
                </Grid>
              </Grid>
              <Grid
                container
                justify="center"
                direction="column"
                alignItems="center"
                xs={12}
                md={4}
                style={{ marginBlock: "20px" }}
              >
                <div data-aos="fade-right">
                  <Grid item>
                    <Typography variant="h6" align="start">
                      StudentHelper Store
                    </Typography>
                  </Grid>
                </div>

                <Grid item>
                  <List dense className={classes.list}>
                    <div data-aos="fade-right" data-aos-offset="70">
                      <ListItem>
                        <ListItemIcon>
                          <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.itemText}
                          primary="Buy/Sell items"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ChatIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.itemText}
                          primary="Contact with Seller/Buyer via Chat and get direction using Map"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.itemText}
                          primary="Send Request to Buy items"
                        />
                      </ListItem>
                    </div>
                  </List>
                </Grid>
              </Grid>
              <Grid
                container
                justify="center"
                direction="column"
                alignItems="center"
                xs={12}
                md={4}
                style={{ marginBlock: "20px" }}
              >
                <div data-aos="fade-right">
                  <Grid item>
                    <Typography variant="h6" align="start">
                      StudentHelper Calculator
                    </Typography>
                  </Grid>
                </div>
                <Grid item>
                  <List dense className={classes.list}>
                    <div data-aos="fade-right" data-aos-offset="70">
                      <ListItem>
                        <ListItemIcon>
                          <ImageIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.itemText}
                          primary="Calculate SPI/CPI"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <WorkIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.itemText}
                          primary="Convert SPI/CPI to percentage"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <BeachAccessIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.itemText}
                          primary="Calculate required spi for remaining semester to achiece targeted CPI"
                        />
                      </ListItem>
                    </div>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Features;
