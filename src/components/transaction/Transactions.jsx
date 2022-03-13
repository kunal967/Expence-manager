import React from "react";
import "rsuite/styles/index.less";
import { Grid, Card, CardHeader, CardContent, FormControl, Select, MenuItem, InputLabel, TextField, Button } from "@material-ui/core";
import useStyle from './style'


const Transactions = () => {
  const classes = useStyle()
  return (
    <div>
      <Card>
        <CardHeader
          title="Transaction Section"
          style={{ textAlign: "center" }}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <FormControl fullWidth >
                  <InputLabel>Type</InputLabel>
                  <Select value="type" label="Transaction Type">
                    <MenuItem value="Income" >Income</MenuItem>
                    <MenuItem value="Expense" >Expense</MenuItem>
                  </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Source</InputLabel>
                  <Select value="source" label="Source" >
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="salary">Salary</MenuItem>
                    <MenuItem value="other">other</MenuItem>
                  </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="number" label="Amount" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="date" label="Date" />
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth>Submit</Button>

          </Grid>
         
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
