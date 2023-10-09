let BtnHumber=document.querySelector('.menu-humberger');
let body=document.querySelector('.body');
let ulHeader=document.querySelector('.ul-header');
let slider=document.querySelector('.slider');
let flag=false;
let searchbtn=document.querySelector('#inputtext');
let htmlcunt=document.querySelectorAll('.cunter-ziro')
BtnHumber.addEventListener('click',()=>{
    if(!flag){
        flag=true;
        slider.style.left='3%';
        slider.style.transition='1s';
        ulHeader.style.left='52%';
        ulHeader.style.transition='1.1s';
    }else{
        flag=false;
        slider.style.left='-50%';
        ulHeader.style.left='-50%';
    }

})
fetch('https://fakestoreapi.com/products/')
.then((res)=>{
    return res.json();
})
.then((complate)=>{
let save='';
complate.forEach((data,index)=>{
save+=`<div class='product-fetch'>
        <h4 class="title">${complate[index].title}</h4>
        <img class="img" width='40%' src=${complate[index].image}>
        <button  class='price'>${complate[index].price}</button>
        <hr>
        </div>
`
})
document.querySelector(".product").innerHTML=save;
})
.catch((error)=>{
    console.log(error)
})

funcsearch=()=>{
    let searching=document.querySelector('#inputtext');
    let filter=searching.value.toLowerCase();
    let listitem=document.querySelectorAll('.product-fetch');
    listitem.forEach(item=>{
        let text=item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
           item.style.display=''
        }else{
            item.style.display='none'
        }
    })
}

htmlcunt.forEach(element=> {
    setInterval(()=>{
        if(element.innerHTML==220){
    clearInterval()
        }else{
    
            element.innerHTML++
        }
    },50)
        
});
searchbtn.addEventListener('input',funcsearch)
