const insert = document.getElementById('insert');

window.addEventListener('keydown',(e)=>
{
    
    insert.innerText=e.key+"  "+e.code
}

)