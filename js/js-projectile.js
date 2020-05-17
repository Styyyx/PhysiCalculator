

$('.panel#projectile .missing select').on('change', (e) => {
  let idx = e.target.selectedIndex;

});

$('.panel#projectile #btnSolve').on('click', function () {
  if (IsFormComplete('.panel#projectile .form')) {
    let methodIndex = $('.panel#projectile .missing select')[0].selectedIndex;
    let data = GetData('.panel#projectile .form');
    console.log(data);
    switch (methodIndex) {
      case 0: {
        ShowResult(GetRangeFlat(data.vi, data.angle));
        break;
      }
      case 1: {
        ShowResult(GetTimeFlight(data.vi, data.angle));
        break;
      }
      case 2: {
        ShowResult(GetMaxHeight(data.vi, data.angle));
      }
    }
    $('.panel#projectile .result').css('user-select', 'text');
  }
});

function IsFormComplete(el) {
  let complete = true;
  ($(el).children('.data')).toArray().forEach((e) => {
    let input = $(e).find('input');
    if (input.val() == '') {
      complete = false;
      input.css({ 'border': '1px solid red' });
    } else {
      input.css({ 'border': 'none', 'border-bottom': '1px solid black' });
    }
  });
  return complete;
}

function ShowResult(result) {
  $('.panel#projectile .result').text(`Result: ${result}`);
}

function GetData(el) {
  let data = {};
  ($(el).children('.data')).toArray().forEach((e) => {
    data[$(e).attr('id')] = $(e).find('input').val();
  });
  return data;
}