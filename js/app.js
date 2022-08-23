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
    console.log(expensesFieldAmount)
})

document.getElementById('calculate-total-btn').addEventListener('click',function(){
    console.log('total btn clicked')
})