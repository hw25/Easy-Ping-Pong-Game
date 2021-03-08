const p1 = {
    score:0,
    button: document.querySelector('#buttonOne'),
    display:document.querySelector('#scoreOne'),
}
const p2 = {
    score:0,
    button: document.querySelector('#buttonTwo'),
    display:document.querySelector('#scoreTwo'),
}

const resetButton = document.querySelector('#buttonReset');
const winningPoint = document.querySelector('#gamepoint');
let winscore = 3;
let isGameover = false;

function update(player,opponent){
    if(!isGameover){
        player.score++;
        if(player.score===winscore){
            if(player.score - opponent.score === 1){
                winscore++;
            }
            else{
            isGameover = true; 
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');  
            player.button.disabled = true;
            opponent.button.disabled = true;  
            }    
        } 
        player.display.textContent = player.score;
    }
}
p1.button.addEventListener('click',function(){
    update(p1,p2);
});       
p2.button.addEventListener('click',function(){
    update(p2,p1);
});

winningPoint.addEventListener('change',function(){
    winscore = parseInt(winningPoint.value);
    reset();
});

resetButton.addEventListener('click', reset);
    
function reset(){
    isGameover = false;
    for(let i of [p1,p2]){
        i.score = 0;
        i.display.textContent = 0;
        i.display.classList.remove('has-text-success','has-text-danger');
        i.button.disabled = false;
    }
   
}