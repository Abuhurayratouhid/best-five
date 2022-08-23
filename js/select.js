// console.log('from select .js')
// no 1
document.getElementById('ozil-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('ozil');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    // just for check 
const lists = document.getElementById('list');
const listLength = lists.children.length;

if(listLength.length <= 5){
    list.appendChild(li);
    
}
else{
    alert('you can not add more then 5 players')
    return ;
}
    
    
    list.appendChild(li);

    // function for button disable after select

        function DisableNextButton(btnId) {
            document.getElementById('ozil-btn').disabled = 'true';
            document.getElementById('ozil-btn').style.backgroundColor = 'grey';
            
        }
    DisableNextButton('ozil-btn')

    
    
})
// no 2
document.getElementById('salah-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('salah');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    // just for check 
const lists = document.getElementById('list');
const listLength = lists.children.length;

if(listLength.length <= 5){
    list.appendChild(li);
}
else{
    alert('you can not add more then 5 players')
   return ;
}
    list.appendChild(li);

    // function for button disable after select 

    function DisableNextButton(btnId) {
        document.getElementById('salah-btn').disabled = 'true';
        document.getElementById('salah-btn').style.backgroundColor = 'grey';
    }
DisableNextButton('salah-btn')
  
    
})  
    

// no 3 
document.getElementById('karim-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('karim');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    list.appendChild(li);

    // function for button disable after select 

    function DisableNextButton(btnId) {
        document.getElementById('karim-btn').disabled = 'true';
        document.getElementById('karim-btn').style.backgroundColor = 'grey';
    }
DisableNextButton('karim-btn')
    // just for check 
const lists = document.getElementById('list');
const listLength = lists.children.length;

if(listLength <= 5){
    list.appendChild(li);
}
else{
   return alert('you can not add more then 5 players')
}
})
// no 4
document.getElementById('pogba-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('pogba');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    list.appendChild(li);

    // function for button disable after select 

    function DisableNextButton(btnId) {
        document.getElementById('pogba-btn').disabled = 'true';
        document.getElementById('pogba-btn').style.backgroundColor = 'grey';
    }
DisableNextButton('pogba-btn')
    // just for check 
const lists = document.getElementById('list');
const listLength = lists.children.length;

if(listLength <= 5){
    list.appendChild(li);
}
else{
   return alert('you can not add more then 5 players')
}
})
// no 5 
document.getElementById('kante-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('kante');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    list.appendChild(li);

    // function for button disable after select 

    function DisableNextButton(btnId) {
        document.getElementById('kante-btn').disabled = 'true';
        document.getElementById('kante-btn').style.backgroundColor = 'grey';
    }
DisableNextButton('kante-btn')
  // just for check 
const lists = document.getElementById('list');
const listLength = lists.children.length;

if(listLength <= 5){
    list.appendChild(li);
}
else{
   return alert('you can not add more then 5 players')
}  
})
// no 6
document.getElementById('ibrahim-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('ibrahim');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    list.appendChild(li);

    // function for button disable after select 

    function DisableNextButton(btnId) {
        document.getElementById('ibrahim-btn').disabled = 'true';
        document.getElementById('ibrahim-btn').style.backgroundColor = 'grey';
    }
DisableNextButton('ibrahim-btn')
    // just for check 
const lists = document.getElementById('list');
const listLength = lists.children.length;

if(listLength <= 5){
    list.appendChild(li);
}
else{
   return alert('you can not add more then 5 players')
}
    
})

// just for check 
// const list = document.getElementById('list');
// const listLength = list.children.length;

// if(listLength <= 5){
//     list.appendChild(li);
// }
// else{
//     alert('youc can not add more then 5 players')
// }

// console.log(listLength);