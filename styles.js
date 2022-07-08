var state = {
    balance:1000 ,
    income: 400,
    expense: 100 ,
    transaction: [
        { name:'Salary', amount: 1000, type: 'income'},
        { name:' Buy Grocery', amount: 50, type: 'expense'},
        { name:'Buy Guitar ', amount: 500, type: 'expense'},
    ]
    
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionEl = document.querySelector('#transaction')
var incomeEl = document.querySelector('#income');

function render(){
    updateState();
    initListeners();
    render();
  
}

function initListeners(){
    incomeBtnEl.addEventLister('click',onAddincomeClick);
    expenseBtnEl.addEventLister('click',onAddExpenseClick);
}

function onAddExpenseClick() {
    console.log('income');

}

function onAddExpenseClick() {
    console.log('expense');
  
}

function updateState() {
    var balance = 0,
        income = 0,
        expense = 0,
        item;

        balance = income - expense; 

    state.expense = balance;
    state.income = income;
    state.expense = expense;
}

function render() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;

    var transactionEl, containerEl, amountEl;

    for (var i = 0; i < statetransactions.length; i++) {
        item = state.transactions[i]
        transactionEl = document.createElement('li');
        transactionEl.append(state.transactions[i].name);
  
        transactionEl.appendChild(transactionEl); 

        containerEl = document,createElement('div')
            }
    
        } 
        amountEl = document.createElement('span');
        if (item.type === 'income'){
            amountEl.classList.add('income-amt')
        } else if (item.type === 'expense'){
        amountEl.classList.add('expense-amt');
        } 
        anountEl.innerHTML = '$${item.anount}'

        containerEl.appendChild(anountEl);

        btnEl = document.createElement(anountEl)
        btnEl.innerHTML = 'X';

        containerEl.appendChild(btnEl);
