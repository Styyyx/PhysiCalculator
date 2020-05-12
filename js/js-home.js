$('.panel#home .button').on('click', () => {
  $('.navbar').css('left', '0');
});

$('.navbar a[href="#home"]').on('click', ()=>{
  $('.navbar').css('left', '-25vw');
});