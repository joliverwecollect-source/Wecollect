import React from "react";

export default function SOAComponent({ account, onClose }) {
  return (
    <div className="fixed inset-0 bg-white p-6 overflow-auto z-50">
      <button onClick={onClose} className="mb-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Close Preview</button>
      <div className="max-w-4xl mx-auto border p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Statement of Account</h2>
          <img src="/logo.png" alt="Company Logo" className="h-12" />
        </div>
        <div className="mb-4">
          <p><strong>Account Name:</strong> {account.accountName}</p>
          <p><strong>Contact:</strong> {account.contact}</p>
          <p><strong>Address:</strong> {account.street}, {account.sitio}, {account.barangay}, {account.city}</p>
          <p><strong>Due Date:</strong> {account.dueDate}</p>
        </div>
        <table className="w-full border-collapse border text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">Principal</th>
              <th className="border px-2 py-1">Total Interests</th>
              <th className="border px-2 py-1">Penalty</th>
              <th className="border px-2 py-1">Partial Payments</th>
              <th className="border px-2 py-1">OB</th>
              <th className="border px-2 py-1">CF %</th>
              <th className="border px-2 py-1">CF Amount</th>
              <th className="border px-2 py-1">TOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">₱{account.principal.toLocaleString()}</td>
              <td className="border px-2 py-1">₱{account.totalInterests.toLocaleString()}</td>
              <td className="border px-2 py-1">₱{account.penalty.toLocaleString()}</td>
              <td className="border px-2 py-1">₱{account.partialPayments.toLocaleString()}</td>
              <td className="border px-2 py-1">₱{account.outstandingBalance.toLocaleString()}</td>
              <td className="border px-2 py-1">{account.cfPercent}%</td>
              <td className="border px-2 py-1">₱{account.cfAmount.toLocaleString()}</td>
              <td className="border px-2 py-1 font-bold">₱{account.totalOutstandingBalance.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
