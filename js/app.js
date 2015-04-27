$('#submit, .emailsignup span:first-of-type').click(function(){
  $('.emailsignup').hide('slow');
});

$('#print').click(function(){
    printFunction();
});

function printFunction() {
    window.print();
};

$('#socBox').on('click', function(){
  var $this = $(this);
  if ($this.hasClass('open')) {
    $this.animate({
      left : '-270px'
    }, 500).removeClass('open');
  } else {
    $this.animate({
      left : '0px'
    }, 500).addClass('open');
  }
});

$( ".icon-share2" ).click(function() {
  $( this ).toggleClass( "icon-share2 icon-cross" );
});

$(document).ready (function() {
$( "#mascarpone" ).tooltip({ content: '<p class="tool">The fresher the better!</p><img src="./imgs/mascarpone.jpg" />' });
$( "#salt" ).tooltip({ content: '<img src="./imgs/pinksalt.gif" />' });
$( "#fig" ).tooltip({ content: '<p class="tool">The juicier the better!</p><img src="./imgs/fig.jpg" />' });
$( "#lemon" ).tooltip({ content: '<img src="./imgs/lemon.jpg" />' });
$( "#cream" ).tooltip({ content: '<img src="./imgs/cream.jpg" />' });
$( "#roughChop" ).tooltip({ content: '<p class="tool">You can substitute other kinds of roasted nuts!</p><img src="./imgs/pecans.jpg" />' });
});

$(function() {
  $( document ).tooltip();
});
