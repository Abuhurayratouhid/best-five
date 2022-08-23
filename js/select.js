// console.log('from select .js')
document.getElementById('ozil-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('ozil');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
    list.appendChild(li);
    
})