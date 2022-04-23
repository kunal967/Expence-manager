import React, {useContext} from "react";
import { Divider, Card, CardHeader, CardContent, Typography, Grid } from "@material-ui/core";

import { ExpenseContext } from "../../context/Context";

import makeStyles from './style'
import Transactions from "../transaction/Transactions";
import List from "../List/List";


const Details = () => {
  const classes = makeStyles();
  const { balance } = useContext(ExpenseContext)

  return (
          <Card className={classes.Details}>
        <CardHeader
          title="Expense-Tracker"
          subheader="Keep Track of your Expences"
          style={{ textAlign: "center" }}
        />
        <Divider />
        <CardContent>
          <Typography align="center" variant="h5">
            Balance : ₹ {balance}
          </Typography>
        </CardContent>
        <Divider />
        <Transactions />
        <Grid>
            <Card spacing={2}>
              <CardContent className={classes.CardContent}>
                <List />
              </CardContent>
            </Card>
          </Grid>

      </Card>
  )


};

export default Details;
