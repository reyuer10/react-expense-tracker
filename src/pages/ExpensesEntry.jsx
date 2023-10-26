import React, { useState } from "react";

export default function ExpensesEntry() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <div>Hi!</div>
    </div>
  );
}
