document.getElementById('btn-withdraw').addEventListener('click', function(){
    // make connect with withdraw input field & get value
    const withdrawField = document.getElementById('withdraw-field');
    const getWithdraw = parseFloat(withdrawField.value);

    //validation check if the HTML input field type is text
    // if(isNuN(getWithdraw)){
    //     alert('Enter valid number');
    //     return;
    // }
    
    // 1. make connect with withdraw h2 & get value
    const setWithdraw = document.getElementById('current-withdraw');
    const previousWithdraw = parseFloat(setWithdraw.innerText);
    
    // 2. make connect & set balance update
    const setWBalance = document.getElementById('balance-total');
    const previousWBalance = parseFloat(setWBalance.innerText);
    
    // validation check
    if (getWithdraw > previousWBalance){
        alert('Balance insufficient ! Baap er Bank w ato taka nai');
        return;
    }
    
    // 1. withdraw update
    setWithdraw.innerText = getWithdraw + previousWithdraw;

    // 2. set balance update
    setWBalance.innerText = previousWBalance - getWithdraw;

      // deposit field clear
      withdrawField.value = '';
});