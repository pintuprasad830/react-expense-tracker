import { useState } from "react";

export function ExpenseTracker() {

    const [item, setItem] = useState("");
    const [amount, setAmount] = useState("");
    const [expenses, setExpenses] = useState([]);

    function addExpense() {

        if (item === "" || amount === "") {
            alert("Enter Item and Amount");
            return;
        }

        let expense = {
            item: item,
            amount: Number(amount)
        };

        setExpenses([...expenses, expense]);

        setItem("");
        setAmount("");
    }

    function deleteExpense(index) {

        let data = expenses.filter((expense, i) => i !== index);

        setExpenses(data);
    }

    let total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div className="container mt-4">

            <h2>Expense Tracker</h2>

            <div className="row">

                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Expense Name"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                </div>

                <div className="col">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <div className="col">
                    <button
                        className="btn btn-primary"
                        onClick={addExpense}
                    >
                        Add Expense
                    </button>
                </div>

            </div>

            <h4 className="mt-4">
                Total Expense: ₹ {total}
            </h4>

            <table className="table table-bordered mt-3">

                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        expenses.map((expense, index) =>
                            <tr key={index}>
                                <td>{expense.item}</td>
                                <td>₹ {expense.amount}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteExpense(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>

            </table>

        </div>
    );
}