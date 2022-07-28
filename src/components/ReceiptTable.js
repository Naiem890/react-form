import React from "react";

const ReceiptTable = ({ receiptTable }) => {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-4xl font-semibold mt-6">Receipt Data</h2>
      <div class="overflow-x-auto mt-6">
        <table class="table w-full border">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            {receiptTable.map((receipt, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{receipt.date}</td>
                <td>{receipt.amount}</td>
                <td>{receipt.paymentMode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReceiptTable;
