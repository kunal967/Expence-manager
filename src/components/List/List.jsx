import React, { useContext } from "react";
import {
  List as MUList,
  Slide,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import useStyles from "./list.style";
import {  Delete, MoneyOff } from "@material-ui/icons";
import { ExpenseContext } from "../../context/Context";

const List = () => {
  const classes = useStyles();

  const { deleteTransaction, transactions } = useContext(ExpenseContext)

  return (
    <MUList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`₹${transaction.amount} - ${transaction.date}`}
            >
            </ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
                  <Delete/>
                </IconButton>
              </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUList>
  );
};

export default List;
