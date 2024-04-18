import { BsPen, BsTrash } from "react-icons/bs";

const actions = {
  edit: BsPen,
  delete: BsTrash,
};
export const tableData = [
  {
    title: "Juice",
    amount: 17,
    category: "Food",
    type: "expense",
    date: new Date().toLocaleDateString(),
    actions,
  },
  {
    title: "Snacks",
    amount: 30,
    category: "Food",
    type: "income",
    date: new Date().toLocaleDateString(),
    actions,
  },
];
