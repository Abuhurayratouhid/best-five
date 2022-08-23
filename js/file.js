// console.log('hello')
const cart = [];

function  displayPlayerName(){
    
    const listContainer = document.getElementById('list')
    const li = document.createElement("li");
    li.innerText = cart;
    listContainer.cartContent = '';
    
    if(cart.length <= 5){
        listContainer.appendChild(li);
    }
    else{
        alert('five player added completed')
        return;
    }
    listContainer.appendChild(li)
    



   
}

function addToCart(element){
    const playerName = element.parentNode.children[0].innerText;

    cart.push(playerName);
    // console.log(cart)
    displayPlayerName()
    
}


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

    // fast calculation 
    // get length of list 
    const list = document.getElementById('list');
    const listLength = cart.length ;
    
    const playersCost = playerInputAmount * listLength;
    // console.log(playersCost)
    

    // set playerExpensesField 
    playerExpensesField.innerText = playersCost;


    // console.log(listQuantity);
    
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
    const coachfieldString = coachfieldInput.value;
    const coachfieldAmount = parseFloat(coachfieldString);
    
    // get final total 
    const finalTotalField = document.getElementById('final-total');
    const finalTotalFieldString = finalTotalField.innerText;
    const finalTotalFieldAmount = parseFloat(finalTotalFieldString);
    
    // set finalTotalField 
    const finalTotal = expensesFieldAmount + managerInputFieldAmount + coachfieldAmount;
    // console.log(finalTotal)

    finalTotalField.innerText = finalTotal;
})