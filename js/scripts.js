const submit = document.getElementById('submitButton');

submit.addEventListener('click', function(){

    const input = document.getElementById('text').value;

    console.log('input',input, typeof input);

    const caracter = input.split('');
    console.log(caracter);

    const invertedWord = caracter.reverse();
    console.log('invertito',invertedWord);
    
    const word = invertedWord.join('');
    console.log(word);
    
    function control(parola,parolainvertita){
    
        if (parola == parolainvertita) {
    
            return alert('dio can sei un genio');
            
        }
        else{
            return alert ('mi dispiace ma sei un bufu')
        }
    
    }
    
    control(input,word);
    
});



