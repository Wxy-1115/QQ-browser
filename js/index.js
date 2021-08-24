$(document).ready(function() {
  setTimeout(function(){
    $('.one').addClass('comeIn')
  },200)
  $('.head').hide()
  $('.qb7').hide()
  $('#fullpage').fullpage({
    navigation: true,
    loopBottom: true,
    onLeave: function(index, nextIndex, direction){
      //using index
      // console.log(index);
      // console.log(nextIndex);
      $('.one').removeClass('comeIn')
      if(nextIndex.index != 0){
        $('#bg').addClass('rotate')
        $('.head').show()
        $('.qb7').show()
      }else{
        setTimeout(function(){
          $('.one').addClass('comeIn')
        },500)
        $('.head').hide()
        $('.qb7').hide()
        $('#bg').removeClass('rotate')
      }
      if(nextIndex.index != 1){
        $('.p2').css('transform', 'translate3d(-50%, -50%, 6000px) scale(1)')
      }else{
        $('.p2').css('transform', 'translate3d(-50%, -50%, 0) scale(1)')
      }
      if(nextIndex.index != 2){
        $('.text3 img').css('transform', 'translateX(-2000px)')
        $('.text3 p').css('color', 'rgba(0, 0, 0, 0)')
        $('.p3').css('transform', 'translateZ(-30px) translateX(2000px) rotateX(30deg)')
      }else{
        $('.text3 img').css('transform', 'translateX(0) translateY(-10px)')
        setTimeout(function () {  
          $('.text3 p').css('color', 'rgba(0, 0, 0, 1)')  
        },1000)
        $('.p3').css('transform', 'translateZ(-30px) rotateX(30deg)')
      }
      if(nextIndex.index != 3){
        $('.p4 p').css('color', 'rgba(0, 0, 0, 0)')
        $('.p4left').css('color', 'rgba(0, 0, 0, 0)')
        $('.p4 .imgbox2').addClass('out')
        $('.p4left ul').removeClass('ccc')
      }else{
        setTimeout(function () {  
          $('.p4 p').css('color', 'rgba(0, 0, 0, 1)') 
          $('.p4left').css('color', 'rgba(0, 0, 0, 1)')  
          $('.p4left ul').addClass('ccc')
        },1000)
        $('.p4 .imgbox2').removeClass('out')
      }
    }
  });

});
  