import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import makeStyles from './style'

const Details = () => {
  const classes = makeStyles();
  return (
    
      <Card className={classes.Details}>
        <CardHeader
          title="Expense-Tracker"
          subheader="Keep Track of your Expences"
          style={{ textAlign: "center" }}
        />
        <CardContent>
          <Typography align="center" variant="h5">
            Balance : 50
          </Typography>
        </CardContent>
      </Card>
    
  );
};

export default Details;
