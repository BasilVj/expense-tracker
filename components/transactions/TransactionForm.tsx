import DatePicker from "../common/DatePicker";
import {
  addNewTransaction,
  updateTransactionAction,
} from "@/server-actions/actions";
import TransactionCategoryDropDown from "./TransactionCategoryDropDown";
import { Transaction } from "@/services/transactions";
import { currentUser } from "@clerk/nextjs/server";
import TransactionFormBtn from "../layout/TransactionFormBtn";

type TransactionFormType = {
  formType: string;
  transactionData?: Transaction;
  id?: string;
};

const TransactionForm = async ({
  formType,
  transactionData,
  id,
}: TransactionFormType) => {
  const user = await currentUser();
  return (
    <>
      {user && (
        <div className="pt-8 w-full lg:w-[500px]">
          <form
            action={
              formType === "CREATE"
                ? addNewTransaction
                : updateTransactionAction
            }
          >
            <label className="flex flex-col mb-4">
              Transaction Title
              <input
                defaultValue={transactionData?.title}
                required
                name="title"
                type="text"
                className="bg-[#ffffff] dark:bg-[#334155] px-3 py-1 mt-1 h-[43px] border border-[#6b7280] 
       focus:outline-none focus:border-[#2563eb] focus:border-2"
              />
            </label>
            <label className="flex flex-col mb-4">
              Transaction Amount
              <input
                name="amount"
                type="number"
                min={1}
                defaultValue={
                  transactionData?.amount ? transactionData.amount : 0
                }
                className="bg-[#ffffff] dark:bg-[#334155] px-3 py-1 mt-1 h-[43px] border border-[#6b7280] 
       focus:outline-none focus:border-[#2563eb] focus:border-2"
              />
            </label>
            <label className="flex flex-col mb-4">
              Transaction Type
              <select
                defaultValue={transactionData?.type}
                name="type"
                className="bg-[#ffffff] dark:bg-[#334155] px-3 py-1 mt-1 h-[43px] border border-[#6b7280] 
       focus:outline-none focus:border-[#2563eb] focus:border-2"
              >
                <option disabled={true} value="">
                  select transaction type
                </option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </label>
            <TransactionCategoryDropDown category={transactionData?.category} />
            <div className="mb-4 flex flex-col">
              <label>Transaction Date</label>
              <DatePicker
                date={transactionData?.date && transactionData.date}
                type="day"
              />
            </div>
            {id && <input type="hidden" value={id} name="id" />}
            <input type="hidden" value={user?.id} name="userId" />
            <TransactionFormBtn formType={formType} />
          </form>
        </div>
      )}
    </>
  );
};

export default TransactionForm;
