
// ID SELECTING
const incomeField = document.getElementById("income-field");
const foodField = document.getElementById("food-field");
const rentField = document.getElementById("rent-field");
const clothesField = document.getElementById("clothes-field");
const calculateBtn = document.getElementById("calculate-button");
const balanceId = document.getElementById("balanceId");

const totalExpenses = document.getElementById("total-expenses");
const saveField = document.getElementById("save_field");
const saveBtn = document.getElementById("save-btn-hero");
const savingAmount = document.getElementById("saving-amount");
const totalRemainingBalance = document.getElementById("remaining-balance");

// TOTAL EXPENSES
calculateBtn.addEventListener("click", function () {
  isEmptyError();
  handleError();
  addition();
  totalBalance();
});

// Addition Function
function addition() {
  const foodAmount = parseInt(foodField.value);
  const rentAmount = parseInt(rentField.value);
  const clothesAmount = parseInt(clothesField.value);

  const TotalExpense = foodAmount + rentAmount + clothesAmount;
  totalExpenses.innerText = TotalExpense.toFixed(0);
}

// BALANCE
function totalBalance() {
  const income = parseInt(incomeField.value);
  const totalExpensesValue = parseInt(totalExpenses.innerText);
  const balance = income - totalExpensesValue;
  balanceId.innerText = balance.toFixed(0);
}

// Saving Function Click
saveBtn.addEventListener("click", function () {
  handleError();
  savePrice();
});

// SAVING
function savePrice() {
  var incomeFieldValue = parseInt(incomeField.value);
  var saveFieldValue = parseInt(saveField.value);

  var totalValue = (incomeFieldValue * saveFieldValue)/100;
  savingAmount.innerText = totalValue.toFixed(0);

  totalRemainingBalance.innerText =
    balanceId.innerText - savingAmount.innerText;
}

/* ERROR HANDLING */
function isEmptyError() {
  if (incomeField.value === "") {
    alert("Field Must be not Empty");
    return;
  }
}

function handleError() {
  if (
    (incomeField.value ||
      foodField.value ||
      rentField.value ||
      clothesField.value ||
      saveField.value) < 0
  ) {
    alert("Please Insert only positive Number");
    return;
  } else if (
    isNaN(incomeField.value) ||
    isNaN(foodField.value) ||
    isNaN(rentField.value) ||
    isNaN(clothesField.value) ||
    isNaN(saveField.value) === true
  ) {
    alert("Please insert a valid number");
    return;
  }
}