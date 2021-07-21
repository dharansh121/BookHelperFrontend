import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  copyright: {
    background: "#202020",
  },
  copyrightText: {
    color: "#878787",
    padding: "10px",
  },
  footer: {
    background: "#151414",
    "& .MuiTypography-root": {
      color: "#878787",
    },
  },
  text: {
    color: "#878787",
  },
  form: {
    width: "100%",

    "& .MuiButtonBase-root": {
      background: "white",
    },
    "& .MuiInputBase-input": {
      backgroundColor: "#2E2E2E",
      color: "white",
    },
    "& .MuiOutlinedInput-multiline": {
      backgroundColor: "#2E2E2E",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
  },
}));

const Footer = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      //   props.login(values);
    },
  });

  const classes = useStyles();
  const date = new Date();
  const year = date.getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.footer} id="Footer">
      <div style={{ display: "flex", flex: "1", paddingBlock: "30px" }}>
        <Grid container justify="center" alignItems="flex-start">
          <Grid
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={3}
            style={{
              paddingBlock: "10px",
              height: `${isMobile ? "" : "100%"}`,
            }}
          >
            <Grid item>
              <img
                src="./icon.svg"
                width="40"
                height="40"
                alt="React Bootstrap logo"
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                noWrap
                color="initial"
                style={{
                  display: "inline",
                  // marginLeft: "5px",
                  color: "white",
                }}
              >
                StudentHelper
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={3}
            style={{ padding: "10px" }}
          >
            <Grid item xs={12}>
              <Link to="/hi" style={{ textDecoration: "none" }}>
                <Typography variant="h5" style={{ color: "white" }}>
                  Quick Links
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/hi" style={{ textDecoration: "none" }}>
                <Typography variant="subtitle1">Home</Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/hi" style={{ textDecoration: "none" }}>
                <Typography variant="subtitle1">Services</Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/hi" style={{ textDecoration: "none" }}>
                <Typography variant="subtitle1">About Us</Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/hi" style={{ textDecoration: "none" }}>
                <Typography variant="subtitle1">Contact Us</Typography>
              </Link>
            </Grid>
          </Grid>

          <Grid
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={6}
            style={{ padding: "10px" }}
          >
            <Grid item xs={12}>
              <Link to="/hi" style={{ textDecoration: "none" }}>
                <Typography variant="h5" style={{ color: "white" }}>
                  Feedback/Report
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/hi" style={{ textDecoration: "none" }}>
                <Typography variant="subtitle1">
                  If you find any Ad with Hate speech, Violence, Nudity or any
                  banned content. Report us immediately.
                </Typography>
              </Link>
            </Grid>

            <form
              className={classes.form}
              action=""
              method="POST"
              onSubmit={formik.handleSubmit}
              noValidate
              autoComplete="off"
            >
              <Grid item style={{ marginBlock: "10px" }} xs={12}>
                <TextField
                  error={
                    formik.touched.email && formik.errors.email ? true : false
                  }
                  required
                  fullWidth
                  id="email"
                  name="email"
                  type="text"
                  label="Email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.email && formik.errors.email
                      ? `${formik.errors.email}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item style={{ marginBottom: "10px" }}>
                <TextField
                  error={
                    formik.touched.message && formik.errors.message
                      ? true
                      : false
                  }
                  fullWidth
                  required
                  id="message"
                  name="message"
                  type="text"
                  label="Message"
                  multiline
                  rows={4}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.message && formik.errors.message
                      ? `${formik.errors.message}`
                      : ""
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="outlined"
                  style={{ color: "green" }}
                >
                  Login
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
      <div className={classes.copyright}>
        <Typography
          variant="subtitle2"
          align="center"
          className={classes.copyrightText}
        >
          Copyright &copy; StudentHelper {year}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
