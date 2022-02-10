// deposite code 
// deposite code 
document.getElementById('depositButton').addEventListener('click', function(){
  if(parseFloat(depositInputField.value) >= 0){
  const depositInputField = document.getElementById('depositInputField');
  const showDeposit = document.getElementById('showDeposit');
  const balanceTotal = document.getElementById('balanceTotal');
  showDeposit.innerText =parseFloat(showDeposit.innerText) + parseFloat(depositInputField.value);
  balanceTotal.innerText = parseFloat(depositInputField.value) + parseFloat(balanceTotal.innerText);
  depositInputField.value = '';
  }
  else{
    return alert('please type valid data')
  }
});
// withdraw code 
// withdraw code 
document.getElementById('withdrawButton').addEventListener('click', function(){
  if(parseFloat(withdrawInput.value) > parseFloat(balanceTotal.innerText)){
    return alert('you have not sufficient balance')
  }
  else if(parseFloat(withdrawInput.value) >= 0){
  const withdrawInput = document.getElementById('withdrawInput');
  const showWithdraw = document.getElementById('showWithdraw');
  const balanceTotal = document.getElementById('balanceTotal');
  showWithdraw.innerText = parseFloat(showWithdraw.innerText) + parseFloat(withdrawInput.value);
  balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(withdrawInput.value);
  withdrawInput.value = '';
  }
  else{
    return alert('please type valid data')
  }
});