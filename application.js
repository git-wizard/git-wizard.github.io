$(document).ready(function() {
  $(window).load(function() {          
  var i =0;
  var images = ['firewatch.png','image2.jpg','background.jpg'];
  var image = $('#background-image');
                //Initial Background image setup
  image.css('background-image', 'url(background.jpg)');
                //Change image at regular intervals
  setInterval(function(){  
   image.fadeOut(500, function () {
   image.css('background-image', 'url(' + images [i++] +')');
   image.fadeIn(500);
   });
   if(i == images.length)
    i = 0;
  }, 10000);           
 });
});
