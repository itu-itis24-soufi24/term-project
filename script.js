let letters = 'UNITY';
const cons_letters = 'UNITY';

let score = document.getElementById("score_value");
let lives = document.getElementById("lives_value");
let userInput = document.getElementById("user-input");
lvalue = 3;
svalue = 0;
function updateLivesDisplay() {
    lives.textContent = '❤️'.repeat(lvalue); 
}
updateLivesDisplay()
function submit() {
    if (lvalue=='0' || svalue == '100'){
        alert("you have to reset the game");
        return;
    }
    let input_value = (userInput.value).toUpperCase()
    if (input_value.length > 1 && input_value != cons_letters) {
        lvalue = 0
        lives.textContent = lvalue;
        updateLivesDisplay();
        setTimeout(() => {
            alert("you lost");
        }, 50); 
        return
    }
    if((input_value==cons_letters) && lvalue>0){
        svalue = 100
        score.textContent = svalue
        for(let i=0;i<5;i++){
            document.getElementById(cons_letters[i]).classList.remove("hidden")
        }
        setTimeout(() => {
            alert("you win");
        }, 50);
        return
    }
    if(letters.includes(input_value)){
        svalue+=20
        score.textContent = svalue
        letters = letters.replace(input_value,'')
        document.getElementById(input_value).classList.remove("hidden")
        if(svalue==100){
            setTimeout(() => {
                alert("you win");
            }, 50);
            return
        }
    }
    else{
        lvalue-=1
        lives.textContent = lvalue;
        updateLivesDisplay();
        if(lvalue==0){
            setTimeout(() => {
                alert("you lost");
            }, 50);
        }
    }
}
function reset(){
    svalue = 0
    lvalue = 3
    updateLivesDisplay();
    score.textContent = svalue;
    userInput.value = '';
    letters = 'UNITY';
    for(let i=0;i<5;i++){
        document.getElementById(cons_letters[i]).classList.add("hidden")
    }
}
