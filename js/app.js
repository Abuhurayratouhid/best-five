// console.log('knock from js file')

document.getElementById('calculate').addEventListener('click',function(){
    // get perPlayerInput 
    const perPlayerInput = document.getElementById('per-player-input');
    const playerInputString = perPlayerInput.value ;
    const playerInputAmount = parseFloat(playerInputString)

    // get player-expenses 
    const playerExpensesField = document.getElementById('player-expenses');
    const expensesFieldString = playerExpensesField.innerText;
    const expensesFieldAmount = parseFloat(expensesFieldString);
    // console.log(expensesFieldAmount)
})




document.getElementById('calculate-total-btn').addEventListener('click',function(){
    // get player-expenses
    const playerExpensesField = document.getElementById('player-expenses');
    const expensesFieldString = playerExpensesField.innerText;
    const expensesFieldAmount = parseFloat(expensesFieldString);
    
    // get manager input field 
    const managerInputField = document.getElementById('manager-input');
    const managerInputFieldString = managerInputField.value ;
    const managerInputFieldAmount = parseFloat(managerInputFieldString);

    // get coachfield 
    const coachfieldInput = document.getElementById('coachfee-input');
    const coachfieldString = coachfieldInput.innerText;
    const coachfieldAmount = parseFloat(coachfieldString);
    console.log(coachfieldAmount)
})