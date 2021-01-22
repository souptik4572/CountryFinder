import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import "./CountryFinder.css";
import SearchForm from "./SearchForm";
import SearchOptions from "./SearchOptions";
import Country from "./Country";
import axios from "axios";
import FlashError from "./FlashError";

function Alert(props) {
 return <MuiAlert elevation={6} variant='filled' {...props} />;
}

function CountryFinder() {
 const [searchQuery, setSearchQuery] = useState("");
 const [endPoint, setEndPoint] = useState("name");
 const [allCountries, setAllCountries] = useState([]);
 const [isError, setIsError] = useState(false);
 const [errorMessage, setErrorMessage] = useState("We encountered an error");
 const BASE_URL = "https://restcountries.eu/rest/v2/";
 const handleClose = () => {
  setIsError(false);
 };
 const fetchCountry = (event) => {
  event.preventDefault();
  let finalUrl = BASE_URL;
  let parameters;
  if (endPoint === "name") {
   finalUrl += `name/${searchQuery}`;
  } else if (endPoint === "code") {
   finalUrl += `alpha/${searchQuery}`;
  } else if (endPoint === "currency") {
   finalUrl += `currency/${searchQuery}`;
  } else if (endPoint === "language") {
   finalUrl += `lang/${searchQuery}`;
  } else if (endPoint === "capitalCity") {
   finalUrl += `capital/${searchQuery}`;
  } else if (endPoint === "region") {
   finalUrl += `region/${searchQuery}`;
  }
  axios
   .get(finalUrl)
   .then((response) => {
    const actualData = response.data;
    setAllCountries(actualData);
    console.log(actualData);
   })
   .catch((error) => {
    setIsError(true);
    setErrorMessage(`Enter a valid country ${endPoint}`);
    console.log(error);
   });
 };
 return (
  <div className='CountryFinder'>
   <SearchForm
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}
    fetchCountry={fetchCountry}
    endPoint={endPoint}
   />
   <SearchOptions endPoint={endPoint} setEndPoint={setEndPoint} />
   <div className='CountryFinder-country-list'>
    {allCountries.map((aCountry) => {
     return (
      <Country
       name={aCountry.name}
       capital={aCountry.capital}
       currency={aCountry.currencies[0].name}
      />
     );
    })}
   </div>
   <Snackbar open={isError} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity='error'>
     {errorMessage}
    </Alert>
   </Snackbar>
  </div>
 );
}

export default CountryFinder;
