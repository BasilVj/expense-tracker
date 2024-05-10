import React from "react";
import { BsTrash } from "react-icons/bs";
import Icon from "../common/Icon";
import { deleteTransactionAction } from "@/server-actions/actions";

type DeleteTransactionProps = {
  transactionId: string;
};

const DeleteTransaction = ({ transactionId }: DeleteTransactionProps) => {
  return (
    <div>
      <form action={deleteTransactionAction}>
        <input type="hidden" name="id" value={transactionId} />
        <button>
          <Icon
            iconName={BsTrash}
            iconCls="text-white"
            iconcontainerCls="bg-[#EF4444] p-2 cursor-pointer rounded-sm"
          />
        </button>
      </form>
    </div>
  );
};

export default DeleteTransaction;
