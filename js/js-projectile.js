$('.panel#projectile .missing select').on('change', (e) => {
  let idx = e.target.selectedIndex;

});

$('.panel#projectile #btnSolve').on('click', function () {
  if (IsComplete('.panel#projectile .form')) {
    let idx = $('.panel#projectile .missing select')[0].selectedIndex;
    switch(idx) {
      case 0: {
        
      }
    }
  } else {
    console.log('incomplete');
  }



});

function IsComplete(el) {
  let complete = true;
  ($(el).children('.data')).toArray().forEach((e) => {
    let input = $(e).find('input');
    if (input.val() == '') {
      complete = false;
      input.css({ 'border': '1px solid red' });
    } else {
      $(e).css({ 'border': 'none', 'border-bottom': '1px solid black' });
    }
  });
  return complete;
}

function ShowResult(result) {
  $('.panel#projectile .result').text(`Result: ${result}`);
}