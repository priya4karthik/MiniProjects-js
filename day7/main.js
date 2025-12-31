// main.js
import { createBudgetManager } from './budget.js';

// Create a budget manager instance
const budget = createBudgetManager();

// DOM elements
const incomeDesc = document.getElementById("incomeDesc");
const incomeAmt = document.getElementById("incomeAmt");
const expenseDesc = document.getElementById("expenseDesc");
const expenseAmt = document.getElementById("expenseAmt");
const output = document.getElementById("output");

// Add Income
document.getElementById("addIncomeBtn").addEventListener("click", () => {
  const desc = incomeDesc.value.trim();
  const amt = parseFloat(incomeAmt.value);
  if (desc && !isNaN(amt) && amt > 0) {
    budget.addIncome(desc, amt);
    displayBudget();
    incomeDesc.value = "";
    incomeAmt.value = "";
  }
});

// Add Expense
document.getElementById("addExpenseBtn").addEventListener("click", () => {
  const desc = expenseDesc.value.trim();
  const amt = parseFloat(expenseAmt.value);
  if (desc && !isNaN(amt) && amt > 0) {
    budget.addExpense(desc, amt);
    displayBudget();
    expenseDesc.value = "";
    expenseAmt.value = "";
  }
});

// Display Budget Summary
function displayBudget() {
  const { totalIncome, totalExpense, balance } = budget.getBalance();
  output.innerHTML = `
    <h3>Budget Summary</h3>
    <p><strong>Total Income:</strong> $${totalIncome}</p>
    <p><strong>Total Expense:</strong> $${totalExpense}</p>
    <p><strong>Balance:</strong> $${balance}</p>
  `;
}
