const body=document.querySelector("body")
const buttons=document.querySelectorAll(".button")

buttons.forEach((btn)=>
{
    btn.addEventListener('click',function(e)
    {
      body.style.backgroundColor=e.target.id;

    })
})
