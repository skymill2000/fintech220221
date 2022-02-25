import React from "react";

const TransactionList = ({ transactionList }) => {
  return (
    <div>
      <table style={{ width: "100%", margin: "10px" }}>
        <thead>
          <tr>
            <td>날짜</td>
            <td>내용</td>
            <td>금액</td>
            <td>잔액</td>
          </tr>
        </thead>
        <tbody>
          {transactionList.length > 0 &&
            transactionList.map((transaction, index) => {
              return (
                <tr key={index}>
                  <td>{transaction.tran_date}</td>
                  <td>{transaction.print_content}</td>
                  <td>{transaction.tran_amt}</td>
                  <td>{transaction.after_balance_amt}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
