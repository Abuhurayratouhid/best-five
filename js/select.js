// console.log('from select .js')
// no 1
// const button = document.querySelector('.btn-1')
// button.disabled = true 
// button.disabled = false 


document.getElementById('ozil-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('ozil');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    list.appendChild(li);
    // if(list.length > 5){
        function DisableNextButton(btnId) {
            document.getElementById('ozil-btn').disabled = 'true';
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
    list.appendChild(li);
    function DisableNextButton(btnId) {
        document.getElementById('salah-btn').disabled = 'true';
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
    
})
// no 4
document.getElementById('pogba-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('pogba');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    list.appendChild(li);
    
})
// no 5 
document.getElementById('kante-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('kante');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    list.appendChild(li);
    
})
// no 6
document.getElementById('ibrahim-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('ibrahim');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    list.appendChild(li);
    
})