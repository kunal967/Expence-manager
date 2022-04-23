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
      justifyContent="center"
      style={{ height: "120vh" }}
    >
      <Grid item xs={12} sm={8} className={classes.main}>
        <Details />
      </Grid>
      
      
      <Grid item xs={12} sm={6} className={classes.mobile} >
          <Charts title="Income"  />
        </Grid>

        <Grid item xs={12} sm={4} className={classes.desktop} >
          <Charts title="Income"  />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.last}>
          <Charts title="Expense" />
        </Grid>
      
    </Grid>
  );
}

export default App;
