$('.panel#home .button').on('click', () => {
  $('.navbar').css('left', '0');
});

$('.navbar a[href="#home"]').on('click', ()=>{
  $('.navbar').css('left', '-22.5vw');
});

// Prevents highlighting/selecting elements on drag
$("*").attr('unselectable', 'on')
	.css('user-select', 'none')
	.bind('selectstart', function () { return false; });