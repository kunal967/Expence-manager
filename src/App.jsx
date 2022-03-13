import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Transactions from "./components/transaction/Transactions";
import useStyles from './components/Details/style'

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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
