import { useFormStatus } from "react-dom";
import { deleteTransactionAction } from "@/server-actions/actions";
import { BsTrash } from "react-icons/bs";
import Icon from "../common/Icon";

type DeleteTransactionProps = {
  transactionId: string;
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      <Icon
        iconName={BsTrash}
        iconCls="text-white"
        iconcontainerCls={`${pending ? "bg-slate-500" : "bg-[#EF4444]"} p-2 cursor-pointer rounded-sm`}
      />
    </button>
  );
}

const DeleteTransaction = ({ transactionId }: DeleteTransactionProps) => {

  const handleDelete = async (formData: FormData) => {
    await deleteTransactionAction(formData);
  };

  return (
    <div>
      <form action={handleDelete}>
        <input type="hidden" name="id" value={transactionId} />
        <DeleteButton />
      </form>
    </div>
  );
};

export default DeleteTransaction;
