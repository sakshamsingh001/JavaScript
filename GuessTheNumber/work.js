const form =document.querySelector('form')
const random=parseInt(Math.random()*100+1);
let prevguess=[]
let count =10;
form.addEventListener('submit',(e)=>
{
    
    e.preventDefault()
   let value=parseInt(document.querySelector('#guessField').value); 
   let message = document.querySelector('.lowOrHi');
   let remaning=document.querySelector('.lastResult')
  
    if(value==random)
    {
        
        message.textContent = "You guessed it! The number was " + random;

    }
    else{
        count--;
        prevguess.push(value)
    
        let guesses=document.querySelector('.guesses')    
        guesses.textContent=prevguess
     
        message.textContent = "You guessed it wrong The number was __ " ;   
  
        remaning.textContent=count;
        
    }
    if(count==0)
    {
        message.textContent = "You lost! The number was " + random; 
        count=10;
        prevguess=[]
    }
   

})