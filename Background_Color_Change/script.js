let number='0123456789abcdef'
let random='#'
let btn1=document.querySelector('.button1')
let btn2=document.querySelector('.button2')
let body=document.querySelector('body')
let interval

const startchanging = function()
{
    random='#'
    for(let i=0;i<6;i++)
    {
        random+=number[Math.floor(Math.random()*16)]
    }
    console.log(random)
    body.style.backgroundColor=random;

}  
 
const stopchanging = function()
{
clearInterval(interval)
interval=null
}
btn1.addEventListener('click',()=>
{
    if(!interval)
    {

        interval=setInterval(startchanging,1000)
    }

    
})
btn2.addEventListener('click',stopchanging)
