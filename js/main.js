

$(function(){
	
  $('.header__burger').on('click',function() {
    $('.burger').toggleClass('active');

    $('.header__navbar').slideToggle(200, "linear",function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
      if($(this).css('display') === "block"){
      $(this).css('display', 'flex');
      }
      });
  });
});
$(function() {
    $('.header__menu-link').on('click',function() {
        $('.burger').removeClass('active');

      
    $('.header__navbar').slideToggle(200, "linear",function(){
      if($(this).css('display') === "flex"){
      $(this).css('display', 'none');
      }
      });
    });
});

AOS.init({
  disable: function() {
    var maxWidth =800; 
    return window.innerWidth < maxWidth;
  }
});