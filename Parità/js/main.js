

function number(min, max){

    return (Math.floor(Math.random()* (max - min + 1) + min));

};

const myButton = document.getElementById('submit');

myButton.addEventListener('click',function(){

    let numberPc = number(1, 5);
    //console.log('number pc',numberPc,typeof numberPc);

    const userNumber = parseInt(document.getElementById('number').value);
    //console.log('user',userNumber,typeof userNumber);

    let numberAll = (userNumber + numberPc);
    console.log('somma',numberAll, typeof numberAll);

    let risultato = sum(numberAll);
    //console.log('risultato',risultato,typeof risultato);

    function sum(control){
        
        if(control % 2 == 0){

            return ('pari');

        }
        else{

            return ('dispari');

        }

    };
    
    const pariDispari = document.getElementById('option').value;
    //console.log('pari o dispari',pariDispari);

    if(risultato == pariDispari){

        alert('hai vinto');

    }
    else{
        alert('si nu bucchin')
    }

    

})