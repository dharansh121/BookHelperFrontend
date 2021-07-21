import React, { useState } from "react";
import axios from "../axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BookNavbar from "./BookNavbar";
import { useFormik } from "formik";
import { addBook } from "../actions/addBookAction";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({}));
const AddBook = (props) => {
  const classes = useStyles();
  const [imageSelected, setImageSelected] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Required";
    } else if (values.title.length < 6) {
      errors.title = "Title should be atlest 6 characters long";
    }

    if (!values.category) {
      errors.category = "Required";
    } else if (values.category.length < 4) {
      errors.category = "Category should be atlest 4 characters long";
    }

    if (!values.description) {
      errors.description = "Required";
    } else if (values.description.length < 10) {
      errors.description = "Description should be atlest 10 characters long";
    }

    if (!values.sellingPrice) {
      errors.sellingPrice = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      sellingPrice: "",
      description: "",
    },
    validate,
    onSubmit: (values) => {
      // console.log(values)

      const finalSubmit = async (values) => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "gtsf8iy2");
        var temp = "";
        try {
          const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dzw4c7fjh/image/upload",
            formData
          );
          console.log(res);
          temp = String(res.data.secure_url);
          const updatedValues = { ...values, ...{ imageUrl: temp } };
          // console.log(updatedValues)
          props.addBook(updatedValues);
        } catch (error) {
          console.log(error, "error in uplaoding image");
        }
      };

      finalSubmit(values);
    },
  });
  return (
    <div>
      <BookNavbar />

      <form action="" method="POST" onSubmit={formik.handleSubmit} noValidate>
        <div style={{ margin: "25px" }}>
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={5}
            direction="column"
          >
            <Grid item xs={12} md={8}>
              <TextField
                error={
                  formik.touched.title && formik.errors.title ? true : false
                }
                required
                id="title"
                name="title"
                type="text"
                label="Title"
                value={formik.values.title}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.title && formik.errors.title
                    ? `${formik.errors.title}`
                    : ""
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                error={
                  formik.touched.category && formik.errors.category
                    ? true
                    : false
                }
                required
                id="category"
                name="category"
                type="text"
                label="Category"
                value={formik.values.category}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.category && formik.errors.category
                    ? `${formik.errors.category}`
                    : ""
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                error={
                  formik.touched.sellingPrice && formik.errors.sellingPrice
                    ? true
                    : false
                }
                required
                id="sellingPrice"
                name="sellingPrice"
                type="number"
                label="SellingPrice"
                value={formik.values.sellingPrice}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.sellingPrice && formik.errors.sellingPrice
                    ? `${formik.errors.sellingPrice}`
                    : ""
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                error={
                  formik.touched.description && formik.errors.description
                    ? true
                    : false
                }
                required
                id="description"
                name="description"
                type="text"
                label="Description"
                value={formik.values.description}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.description && formik.errors.description
                    ? `${formik.errors.description}`
                    : ""
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <label className="upload image">Upload Image:</label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                // value={imageSelected.name}
                onChange={(e) => setImageSelected(e.target.files[0])}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Button
                type="submit"
                variant="outlined"
                style={{ color: "green" }}
              >
                Add Book
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addBook })(AddBook);
