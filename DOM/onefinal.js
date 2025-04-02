
    // const a = document.querySelector('#one');

    // // a.style.backgroundColor = 'green';
    // // const b = document.querySelector('.two');
    // // b.style.backgroundColor = 'green'; 

    // // console.log(a.getAttribute('id')); 
    // console.log( a.getAttributeNames)   
 
    let a=document.querySelector('#one')
    console.log(a)
    let b=document.querySelector('.two')
    console.log(b)
   a.textContent="hello"

  function addcontent(newcontent)
   {
    const newelement=document.createElement('li')
    newelement.textContent=newcontent
    const list=document.querySelector('#new')
    list.append(newelement)
   }
   addcontent("hello")
  
   let li=document.querySelector('#new')
   console.log(li)
   
   let list=document.querySelectorAll('.list')
   console.log(list)