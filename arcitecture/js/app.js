var sideNav = document.getElementById("mySidenav")
var menu = document.getElementsByClassName("menu")[0]
const openNav = ()=>{
menu.addEventListener("click",()=>{
 sideNav.style.width="390px"

   
    

})

}
openNav()
  

function closeNav(){
    sideNav.style.width="0px"

}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,

    pagination: {

      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints:{
        0:{
          slidesPerView:1,
    slidesPerGroup: 1,

        },
        600:{
          slidesPerView:3,
          
        },
        768:{
          slidesPerView:3
        },
        900:{
          slidesPerView:3
        },
        1400:{
          slidesPerView:3
        }
      }
  });
