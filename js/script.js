$(function(){
  var mySwiper = new Swiper ('.swiper-container', {
  loop:true,
  initialSlide:0,
  autoplay:{
    delay:5000,
    disableOnInteraction:true,
  },
    centeredSlides:true,
    slidesPerView:1.5,
    spaceBetween:20,
  breakpoints:{
    480:{
      centeredSlides:true,
      slidesPerView:2,
      spaceBetween:35,
    },
    
    895:{
    centeredSlides:true,
    slidesPerView:4,
    spaceBetween:56,
  },
},
  });
 
  const $submitbtn = $('#js-submit');
  
  $('#form input,#form textarea').on('change',function(){
  if(
  $('#form input[type="text"]').val() !==""&&
  $('#form input[type="email"]').val() !==""&&
  $('#form #text').val() !==""&&
  $('#form #privacycheck').prop('checked')===true){
    $submitbtn.prop('disabled',false);
    $submitbtn.css('opacity','1');
    $('#contact-error-message').css('visibility','hidden');
  }else{
    $submitbtn.prop('disabled',true);
    $submitbtn.css('opacity','0.6');
    $('#contact-error-message').css('visibility','visible');
  }
  });

  $('.jsaccodionTitle').on('click',function(){
    $(this).next().slideToggle(600);
  });

  $('.jsaccodion-content').on('click',function(){
    $(this).slideUp(600);
  });

  $('#js-humburger').on('click',function(){
    $('#js-nav-menu').toggleClass('open');
    $('#js-drawer-background').toggleClass('open');
    $(this).toggleClass('open');
  });
  $('#js-drawer-background').on('click',function(){
    $(this).toggleClass('open');
    $('#js-nav-menu').toggleClass('open');
    $('#js-humbuger').toggleClass('open');
  });

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdLisvxSbBh-umi9Xp9fQ6vupO1D9cEjD9q_rUXSzW_SAOn5g/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $("#js-submit").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});

var scroll = new SmoothScroll('a[href*="#"]', {
  header: '#header',
});
AOS.init();

