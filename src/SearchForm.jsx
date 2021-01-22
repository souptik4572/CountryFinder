import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 root: {
  "& > *": {
   margin: theme.spacing(1),
   width: "25ch",
  },
 },
}));

export default function SearchForm(props) {
 const classes = useStyles();
 const { searchQuery, setSearchQuery, fetchCountry, endPoint } = props;
 let searchMessage = "";
 if (endPoint === "name") {
  searchMessage = "Enter name of country";
 } else if (endPoint === "code") {
  searchMessage = "Enter the country code";
 } else if (endPoint === "currency") {
  searchMessage = "Enter currency code";
 } else if (endPoint === "language") {
  searchMessage = "Enter language code";
 } else if (endPoint === "capitalCity") {
  searchMessage = "Enter capital city";
 } else if (endPoint === "region") {
  searchMessage = "Enter continent name";
 }
 const handleChange = (event) => {
  setSearchQuery(event.target.value);
 };
 return (
  <form
   className={classes.root}
   noValidate
   autoComplete='off'
   onSubmit={fetchCountry}
  >
   <TextField
    id='outlined-basic'
    label={searchMessage}
    variant='outlined'
    value={searchQuery}
    onChange={handleChange}
    fullWidth
   />
   <Button variant='contained' color='primary' onClick={fetchCountry}>
    Submit
   </Button>
  </form>
 );
}
