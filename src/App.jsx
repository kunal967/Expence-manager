import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Transactions from "./components/transaction/Transactions";
import useStyles from './components/Details/style'
import List from "./components/List/List";

function App() {
  const classes = useStyles()
  return (
    <div>
      <Grid
      className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "10vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Grid >
            <Details />
          </Grid>
          <Grid >
            <Transactions />
          </Grid>
          <Grid >
            <Card spacing={2}>
              <CardContent  className={classes.CardContent}>
                <List/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
