import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Hero from "./HomeComponents/Hero";
import Options from "./HomeComponents/Options";
import AboutUs from "./HomeComponents/AboutUs";
import Features from "./HomeComponents/Features";
import Footer from "../Footer";
import Navbar from "./HomeComponents/Navbar";
const useStyles = makeStyles((theme) => ({}));
const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Hero />
      <Options />
      <Features />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
