import { useContext } from "react";
import { TransactionModalContext, TransactionModalContextType } from "../contexts";

const useTransactionModal = (): TransactionModalContextType => {
  const context = useContext(TransactionModalContext);
  if (context === undefined) {
    throw new Error("useTransactionModalContext must be used within a TransactionModalProvider");
  }
  return context;
};

export { useTransactionModal };
