import React, { useState } from "react";
import { categoryIcons } from "../../svg_category/svgCategory";
import { categoryColor } from "../../svg_color/svgColor";

export default function RecentTransaction() {
  const [transaction, setTransaction] = useState([
    {
      id: 1,
      category: "Grocery Shopping",
      title: "Purchased groceries for the month",
      amount: 150,
      date: "2023-10-15",
    },
    {
      id: 2,
      category: "Monthly Salary",
      title: "Received monthly salary from XYZ Company",
      amount: 3000,
      date: "2023-10-01",
    },
    {
      id: 3,
      category: "Bills & Utilities",
      title: "Paid electricity and water bills",
      amount: 80,
      date: "2023-10-10",
    },
  ]);

  return (
    <div className="my-10 h-[300px] w-[550px] shadow-md p-7 rounded-xl text-[#303030]">
      <div>
        <p className="text-2xl py-3 text-[#303030]">Recent Transaction</p>
      </div>
      <div>
        {transaction.map((transac) => (
          <div
            key={transac.id}
            className="flex items-center justify-between space-y-2"
          >
            <div className={`flex space-x-3`}>
              <div>{categoryIcons[transac.category]}</div>
              <div>
                <p>{transac.category}</p>
              </div>
            </div>
            <div>
              <p>{transac.amount}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
