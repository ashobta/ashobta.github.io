$(document).ready(function(){
    $('#yokogawa').click(function() {
      $('#ykgwlist').slideToggle();
      $('#ykgwplus').toggle();
    });
});

$(document).ready(function(){
  $('#ykgwlist1').click(function() {
    $('#ykgwlist1_p').slideToggle();
    $('#ykgwlist1_span').toggle();
  });
});

$(document).ready(function(){
    $('#courses').click(function() {
      $('#courlist').slideToggle();
      $('#courses_span').toggle();
    });
});

$(document).ready(function(){
    $('#telkom').click(function() {
      $('#tellist').toggle("slide");
    });
});