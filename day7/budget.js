// budget.js

// Factory function for Budget Manager
function createBudgetManager() {
  let incomes = [];
  let expenses = [];

  function addIncome(description, amount) {
    incomes.push({ description, amount });
  }

  function addExpense(description, amount) {
    expenses.push({ description, amount });
  }

  function getBalance() {
    const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
    const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
    const balance = totalIncome - totalExpense;
    return { totalIncome, totalExpense, balance };
  }

  return { addIncome, addExpense, getBalance };
}

// Export the factory function
export { createBudgetManager };
