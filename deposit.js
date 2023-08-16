// step-1: add event listener to the deposit button
// step-2: get the deposit amount from the deposit input field
// for input field use .value to the value inside the input field
// step-3: get the current deposit total
// for non-input(element other than input,textarea)use innerText to get the text

// step-4:add number to set the total deposit
// set the deposit total
// step-5:get ballance current total
// step-6:calculate current total balance
// set the balance total
// step-7 clear the deposit field


document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseInt(newDepositAmountString);
    // const newDepositAmount = parseFloat(newDepositAmountString);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseInt(previousDepositTotalString);
    // const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElenment = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElenment.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
const currentBalancetotal = previousBalanceTotal + newDepositAmount;
balanceTotalElenment.innerText = currentBalancetotal;
depositField.value = ' ';
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
  const  withdrawField = document.getElementById('withdraw-field');
  const newwithdrawAmountString =  withdrawField.value;
  const newwithdrawAmount = parseFloat(newwithdrawAmountString);
  const withdrawtotalElemnt = document.getElementById('withdraw-total');
  const previouswithdrawTotalString = withdrawtotalElemnt.innerText;
  const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);
  const currentwithdrawTotal = previouswithdrawTotal + newwithdrawAmount;
  withdrawtotalElemnt.innerText = currentwithdrawTotal;
  const balanceTotalElenment = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElenment.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalancetotal = previousBalanceTotal - newwithdrawAmount ;
  balanceTotalElenment.innerText = currentBalancetotal;
  depositField.value = ' ';
  })
