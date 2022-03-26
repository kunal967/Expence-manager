import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import useStyles from "./components/Details/style";
import Charts from "./components/charts/Charts";

function App() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.grid}
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ height: "100vh" }}
    >
      <Grid sm={7} xs={12}>
        <Details />
      </Grid>
      
        <Grid sm={5} xs={12}>
          <Charts title="Income" />
        </Grid>
        <Grid sm={5} xs={12}>
          <Charts title="Expense" />
        </Grid>
      
    </Grid>
  );
}

export default App;
