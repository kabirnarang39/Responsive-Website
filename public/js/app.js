const nbarSlider=()=>{
    const menuItem=document.querySelector('.menu-item');
    const navBar=document.querySelector('.nav-link');
    const navLis=document.querySelectorAll('.nav-link li');
    menuItem.addEventListener('click',()=>{
        navBar.classList.toggle('nav-active');
        navLis.forEach((link,index)=>{
            if(link.style.animation){
               link.style.animation=``;
            }else{
               link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;  
            }
        })
       
    });
}

nbarSlider();