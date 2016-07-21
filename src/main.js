var colorList = ['saddlebrown', 'sienna', 'brown', 'firebrick', 'red', 'indianred', 'darksalmon', 'lightpink', 'hotpink', 'coral', 'darkorange', 'orange', 'gold', 'yellow', 'khaki', 'darkkhaki', 'darkolivegreen', 'darkgreen', 'green', 'palegreen', 'powderblue', 'lightskyblue', 'blue', 'darkblue', 'darkslateblue', 'darkorchid', 'purple', 'indigo', 'gainsboro', 'dimgrey', 'black', 'white'];

var brush;

$(document).ready(function() {
  for (var i = 0; i < 2144; i++) {
    $('#canvas').prepend('<div class="pixel"></div>');
  };
  for (var i = 0; i < colorList.length; i++) {
    $('#colors').append('<div class="brushColor" style="background-color:' + colorList[i] + '" name="' + colorList[i] + '"</div>');
  };
  $('.brushColor').on('click', function() {
    $('.brushColor').css('border', '1px solid black');
    $(this).css('border', '7px solid black');
    if($(this).attr('name') === 'black'){
      $(this).css('border', '7px solid white');
    };
    brush = $(this).attr('name');
  });

  $('.pixel').on('mousedown', function() {
    $(this).css('background-color', brush);
    $('.pixel').on('mouseenter', function() {
      $(this).css('background-color', brush);
      $('#canvas').on('mouseup', function(){
        $('.pixel').off('mouseenter');
      });
    });
  });
  $('#clear').on('click', function() {
    $('.pixel').css('background-color', 'white');
  });
});
