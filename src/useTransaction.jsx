import { useContext } from "react";
import { ExpenseContext } from "./context/Context";
import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from "./constants/constant";

const useTransaction = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseContext);
  const transactionPerType = transactions.filter((t) => t.type === title);
  const total = transactionPerType.reduce(
    (acc, curVal) => (acc += curVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;
  console.log({ transactionPerType, categories, total });

  transactionPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((c) => c.amount > 0);

  const charData = {
    dataSets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backGroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels : filteredCategories.map((c)=> c.type)
  };
  return {filteredCategories, total, charData}
};

export default useTransaction