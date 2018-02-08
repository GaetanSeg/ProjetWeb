$(document).ready(function(){
    $("#button1").click(function(){
        $("div").animate({
            left: '250px',
            opacity: '0.5',
            height: '+=150px',
            width: '+=150px'
        });
    });
});
$(document).ready(function(){
    $("#button2").click(function(){
        $("div").animate({
            left: '-=50px',
            opacity: '1',
            height: '-=50px',
            width: '-=50px'
      });
  });
});
