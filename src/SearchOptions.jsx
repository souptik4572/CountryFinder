import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function SearchOptions(props) {
 const { endPoint, setEndPoint } = props;
 const handleChange = (event) => {
  setEndPoint(event.target.value);
 };

 return (
  <FormControl component='fieldset'>
   <FormLabel component='legend'>Search by Endpoints</FormLabel>
   <RadioGroup
    aria-label='endpoints'
    name='endpoints'
    row
    value={endPoint}
    onChange={handleChange}
   >
    <FormControlLabel value='name' control={<Radio />} label='Name' />
    <FormControlLabel value='code' control={<Radio />} label='Code' />
    <FormControlLabel value='currency' control={<Radio />} label='Currency' />
    <FormControlLabel value='language' control={<Radio />} label='Language' />
    <FormControlLabel
     value='capitalCity'
     control={<Radio />}
     label='Capital City'
    />
    <FormControlLabel value='region' control={<Radio />} label='Region' />
   </RadioGroup>
  </FormControl>
 );
}
