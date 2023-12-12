
let numberPc = number(1, 5);
console.log('number pc',numberPc,typeof numberPc);

function number(min, max){

    return (Math.floor(Math.random()* (max - min + 1) + min));

};

const myButton = document.getElementById('submit');

myButton.addEventListener('click',function(){

    const userNumber = parseInt(document.getElementById('number').value);
    console.log('user',userNumber,typeof userNumber);

    let numberAll = (userNumber + numberPc);
    console.log('somma',numberAll, typeof numberAll);

    let calcolo = sum(5);
    console.log(calcolo);

    function sum(control){
        
        if(control % 2 == 0){

            return alert('hai vinto');

        }
        else{
            return alert('hai perso')
        }

    };


})