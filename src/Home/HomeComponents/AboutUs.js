import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./AboutUs.css";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SchoolIcon from "@material-ui/icons/School";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import WhyUs from "./WhyUs";
const useStyles = makeStyles((theme) => ({}));
const AboutUs = () => {
  const classes = useStyles();

  const card = (name, university, city) => {
    return (
      <div className="aboutUs_card">
        <center>
          <div className="aboutUs_div">
            <div className="aboutUs_content">
              <div className="aboutUs_together aboutUs_primary-text">
                <PersonIcon />
                <Typography variant="h5" style={{ marginLeft: "8px" }}>
                  {name}
                </Typography>
              </div>
              <div className="aboutUs_together aboutUs_secondary-text">
                <SchoolIcon />
                <Typography variant="subtitle1" style={{ marginLeft: "8px" }}>
                  {university}
                </Typography>
              </div>
              <div className="aboutUs_together aboutUs_secondary-text">
                <LocationOnIcon />
                <Typography variant="subtitle1" style={{ marginLeft: "8px" }}>
                  {city}
                </Typography>
              </div>
            </div>
            <div className="aboutUs_social">
              <div className="aboutUs_background ">
                <IconButton aria-label="mail">
                  <EmailIcon
                    className="aboutUs_secondary-text"
                    fontSize="large"
                  />
                </IconButton>
              </div>

              <div
                className="aboutUs_background"
                style={{ marginLeft: "10px" }}
              >
                <IconButton aria-label="linkedin">
                  <LinkedInIcon
                    className="aboutUs_secondary-text"
                    fontSize="large"
                  />
                </IconButton>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  };
  return (
    <div style={{ backgroundColor: "gray" }} id="AboutUs">
      <div style={{ paddingBlock: "30px" }}>
        <div data-aos="fade-up">
          <Typography variant="h5" align="center">
            About Us
          </Typography>
        </div>
        <div data-aos="fade-up">
          <Typography
            variant="subtitle1"
            align="center"
            style={{ margin: "20px" }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Typography>
        </div>
        <Grid container justify="center" alignItems="center">
          <Grid
            container
            justify="center"
            alignItems="center"
            // spacing={1}

            lg={9}
            md={11}
            sm={12}
          >
            <Grid item xs={12} md={4} style={{ marginBlock: "20px" }}>
              <div data-aos="zoom-in-up">
                <center>
                  {card(
                    "Dharansh Patel",
                    "CSE, Nirma University",
                    "Ahmedabad, Gujarat"
                  )}
                </center>
              </div>
            </Grid>

            <Grid item xs={12} md={4} style={{ marginBlock: "20px" }}>
              <div data-aos="zoom-in-up">
                <center>
                  {card(
                    "Shivam Bhalodia",
                    "CSE, Nirma University",
                    "Rajkot, Gujarat"
                  )}
                </center>
              </div>
            </Grid>

            <Grid item xs={12} md={4} style={{ marginBlock: "20px" }}>
              <div data-aos="zoom-in-up">
                <center>
                  {card("Viren Sureja", "ICT, PDPU", "Rajkot, Gujarat")}
                </center>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <WhyUs />
      </div>
    </div>
  );
};

export default AboutUs;
