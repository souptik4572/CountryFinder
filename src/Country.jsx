import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
 root: {
  minWidth: 275,
  margin: "1.5rem auto",
 },
 bullet: {
  display: "inline-block",
  margin: "0 2px",
  transform: "scale(0.8)",
 },
 title: {
  fontSize: 20,
 },
 pos: {
  marginBottom: 12,
 },
});

export default function Country(props) {
 const classes = useStyles();
 const bull = <span className={classes.bullet}>•</span>;
 const { name, capital, currency } = props;
 return (
  <Card className={classes.root}>
   <CardContent>
    <Typography className={classes.title} color='textSecondary' gutterBottom>
     {name}
    </Typography>
    <Typography className={classes.pos} color='textSecondary'>
     Capital City - {capital}
    </Typography>
    <Typography className={classes.pos} color='textSecondary'>
     Curreny Used - {currency}
    </Typography>
   </CardContent>
  </Card>
 );
}
