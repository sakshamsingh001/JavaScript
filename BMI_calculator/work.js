const form=document.querySelector("form")
form.addEventListener('submit',function(e)
{
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    
    const BMI=(weight/((height*height)/100)).toFixed(2)
   const result=document.querySelector('#results')
   result.textContent=BMI
})