$('.panel#home a').on('click', () => {
  $('.navbar').css('left', '0');
});

$('.navbar a[href="#home"]').on('click', () => {
  $('.navbar').css('left', '-26vw');
  $('.panel#speed .form .data input').val('');
  $('.panel#projectile .form .data input').val('');
});

$('.navbar a').on('click', () => {
  $('.panel#speed .form .data input').val('');
  $('.panel#projectile .form .data input').val('');
});

// Prevents highlighting/selecting elements on drag
$('*').attr('unselectable', 'on')
  .css('user-select', 'none');
  // .bind('selectstart', function () { return false; });

$('.form .data input').on('keypress', (e) => {
  if (e.key >= 0 && e.key <= 9) {
    return true;
  } else if (e.key == '/') {
    if (($(e.target).val().includes('/'))) {
      return false;
    } else if ($(e.target).val().match(/\d+/)) {
      return true;
    } else { return false; }
  } else { return false; }
});
// inputs should match(/\d+\/\d+/)