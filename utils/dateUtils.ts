import moment from "moment";

export const findMonthAndYearFromDate = (
  transactionDate: string
): { month: string; year: string } => {
  const date = moment(transactionDate, "DD/MM/YYYY");
  const month = date.format("MMMM");
  const year = date.format("YYYY");
  return { month, year };
};
