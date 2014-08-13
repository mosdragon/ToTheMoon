$(document).ready(function() {

  // var spaceWidth = $('#space').width() - 200;
  // var spaceHeight = $('#space').height() + 1000;
  var spaceWidth = $('body').width() - 120;
  var spaceHeight = $('body').height();
  console.log(spaceWidth);
  console.log(spaceHeight);

  $('.astro').each(function(){
    $(this).css({
      'top': Math.ceil(spaceHeight*Math.random()),
      'left': Math.ceil(spaceWidth*Math.random()),
      'z-index': Math.ceil(Math.random()*10) + 4,
    });
    $(this).jqFloat({
      // width: 1500,
      // height: 400,
      // speed: Math.random()*500 + 1000
      width:Math.floor(Math.random()*10)*15,
      height:80,
      speed:Math.floor(Math.random()*10)*100 + 800
    });
  });
});
