"use client";
import DatePicker from "./DatePicker";
import {
  addNewTransaction,
  updateTransactionAction,
} from "@/server-actions/actions";
import TransactionCategoryDropDown from "./TransactionCategoryDropDown";
import { Transaction } from "@/services/transactions";

type TransactionFormType = {
  formType: string;
  transactionData?: Transaction;
  id?: string;
};

const TransactionForm = ({
  formType,
  transactionData,
  id,
}: TransactionFormType) => {
  /*  const clientSideAction = async (formData: FormData) => {
    await addNewTransaction(formData);
  }; */

  return (
    <div className="pt-8 w-full lg:w-[500px]">
      <form
        action={
          formType === "CREATE" ? addNewTransaction : updateTransactionAction
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
            defaultValue={transactionData?.amount ? transactionData.amount : 0}
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
          <DatePicker date={transactionData?.date} />
        </div>
        {id && <input type="hidden" value={id} name="id" />}
        <div className="w-full flex justify-end mt-10">
          <button className="bg-[#EF4444] me-2 py-2 px-4 text-white">
            Cancel
          </button>
          <button className="bg-[#22C55E] px-4 text-white" type="submit">
            {formType === "CREATE" ? "CREATE" : "UPDATE"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
