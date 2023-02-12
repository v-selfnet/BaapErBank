document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    // get input ammount
    const getDeposit = parseFloat(depositField.value);

    // set input amount to deposit area h2
    const setDeposit = document.getElementById('current-deposit');
    const previousDeposit = parseFloat(setDeposit.innerText);
    setDeposit.innerText = getDeposit + previousDeposit;

    //set balance
    const setBalance = document.getElementById('balance-total');
    const previousBalance = parseFloat(setBalance.innerText);
    setBalance.innerText = getDeposit + previousBalance;
    
    // deposit field clear
    depositField.value = '';
});