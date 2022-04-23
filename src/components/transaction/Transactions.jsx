import React, { useContext, useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Button,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import useStyle from "./style";
import { ExpenseContext } from "../../context/Context";
import { expenseCategories, incomeCategories } from "../../constants/constant";
import CustomizedSanckbar from "../Snackbar/sanckbar";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date(),
};

const Transactions = () => {
  const classes = useStyle();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseContext);
  const [open , setOpen] = useState(false)

  const createTransation = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };

    setOpen(true)
    addTransaction(transaction);
    setFormData(initialState);
  };

  const categories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (

    <div>
      <CustomizedSanckbar open={open} setOpen={setOpen} />
      <Card>
        <CardHeader
          title="Transaction Section"
          style={{ textAlign: "center" }}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  label="Transaction Type"
                >
                  <MenuItem value="Income">Income</MenuItem>
                  <MenuItem value="Expense">Expense</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Source</InputLabel>
                <Select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  label="Source"
                >
                  {categories.map((c) => (
                    <MenuItem value={c.type} key={c.type}>
                      {" "}
                      {c.type}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="number"
                label="Amount"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </Grid>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              fullWidth
              onClick={createTransation}
            >
              Submit
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
