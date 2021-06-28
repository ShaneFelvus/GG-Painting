console.clear();
const navSlide= ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
 //Toggle Nav
    
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index) =>{
            if(link.style.animation) {
                link.style.animation=''
             } else {
               
                 link.style.animation=`navLinkFade 0.5s ease forwards ${index /2 + 1.3}s`;
             }
             console.log(index / 7);
         });

        burger.classList.toggle("toggle");

    });
  
    $(window).scroll(function ()
{
    if ($(document).scrollLeft() != 0)
    {
        $(document).scrollLeft(0);
    }
});
 }

 navSlide();
