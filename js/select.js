// console.log('from select .js')
// no 1
document.getElementById('ozil-btn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const name = document.getElementById('ozil');
    const realName = name.innerText;
    const li = document.createElement('li')
    li.innerText = realName;
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
    
    
})