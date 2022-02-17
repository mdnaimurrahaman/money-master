function calculate() {
// ------------------Total Income-------------------------//
    const income = document.getElementById('income').value ;
    const totalIncome = parseFloat(income);
    
//--------------------Total Expenses------------------------//
    const foodCosts = document.getElementById('food-costs').value ;
    const rentCosts = document.getElementById('rent-costs').value ;
    const clothesCosts = document.getElementById('clothes-costs').value ;
    
//----------------- add total expenses-----------------------//
     const totalExpenses = parseFloat(foodCosts) + parseFloat(rentCosts) + parseFloat(clothesCosts);

//-------------Balance and expenses calculation-------------//
    document.getElementById('total-expenses').innerText = totalExpenses ;
    const totalBalance = totalIncome - totalExpenses ;
    document.getElementById('total-balance').innerText = totalBalance ;
}

//------------------- percentage calculations ----------------------//
function saveButton(){
    const income = document.getElementById('income').value ;
    const totalIncome = parseFloat(income);

    const saveInput = document.getElementById ('save-input').value ;
    const saveAmount = parseFloat (saveInput);

    // percentage
    saveTotalAmount = (totalIncome * saveAmount)/100 ;
    document.getElementById('saving-amount').innerText = saveTotalAmount ;

    // calculate remaining Balance
    const balance = document.getElementById('total-balance').innerText;
    const totalBalance = parseFloat(balance);

    remainingBalance = totalBalance - saveTotalAmount ;
    document.getElementById('remaining-balance').innerText = remainingBalance ;
}