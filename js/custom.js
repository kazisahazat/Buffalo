$(function(){

// slider 1
$('.slider1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  dots: false,
  speed:2000,
  autoplaySpeed: 3500,  

});  
    
  
// slider 2
$('.slider2').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
  arrows:true,
  prevArrow:'.left2',
  nextArrow:'.right2',
  dots: false,
  speed:2000,
  autoplaySpeed: 3500,  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
      
      ]
});  
    
  
 
  
// slider 3
$('.slider3').slick({
  slidesToShow: 8,
  slidesToScroll: 2,
  autoplay: false,
  arrows:true,
  prevArrow:'.left3',
  nextArrow:'.right3',
  dots: false,
  speed:2000,
  autoplaySpeed: 3500,  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
      
      ]
});  
    
    

    
    
});

