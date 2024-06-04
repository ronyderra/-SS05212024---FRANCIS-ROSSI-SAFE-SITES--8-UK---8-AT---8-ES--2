document.addEventListener('DOMContentLoaded', function () {
  if ($("#featureGameSlider1").length) {
   var swiper = new Swiper('#featureGameSlider1', {
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       576: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       992: {
         slidesPerView: 3,
       },
       1200: {
         slidesPerView: 3,
       }
     },
     navigation: {
       nextEl: '.slider-next',
       prevEl: '.slider-prev',
     },
     spaceBetween: 24,
     autoplay: {
      delay: 2000, 
      disableOnInteraction: false, 
    },
    loop: true, 
   }); 
  }



   $('.th-menu-toggle').click(function () {
   $('.th-menu-wrapper').toggleClass('th-body-visible')
 })



 if ($("#agePopup").length) {
 var agePopup = document.getElementById("agePopup");
 var btnYes = document.getElementById("btnYes");
 var btnNo = document.getElementById("btnNo");

 btnYes.addEventListener("click", function () {
    agePopup.style.display = "none";
 });

 btnNo.addEventListener("click", function () {
    window.location.href = "https://www.google.com/";
 });
}


if ($("#okClose").length) {
  $('#okClose').click(function () {
$('#okCookie').addClass('none')
})
}
 });
