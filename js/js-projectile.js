/** Notes:
 * 
 * On change of missing variable, also update result select options
 * 
 * 
 */

$('.panel#projectile .title select').on('change', (e) => {
  let idx = e.target.selectedIndex,
    methodSelect = $('.panel#projectile .method select');

});

$('.panel#projectile .form .data#angle select').on('change', (e) => {
  $('.panel#projectile .form .data#angle div').text(($(e.target).prop('selectedIndex') == 0) ? 'Angle &theta;' : 'Radians');
});

$('.panel#projectile .method select').on('change', (e) => {
  let methodIndex = $(e.target).prop('selectedIndex'),
    resultSelect = $('.panel#projectile .result select'),
    form = $('.panel#projectile .form');
  if (methodIndex == 0) {

  }
});

$('.panel#projectile #btnSolve').on('click', function () {
  if (IsFormComplete('.panel#projectile .form')) {
    let methodIndex = $('.panel#projectile .method select').prop('selectedIndex'),
      data = GetData('.panel#projectile .form'),
      isFlat = ($('.panel#projectile .title select').prop('selectedIndex') == 0) ? true : false,
      isRadian = ($('.panel#projectile .form .data#angle select').prop('selectedIndex') == 0) ? false : true,
      isVInches = ($('.panel#projectile .form .data#vi select').prop('selectedIndex') == 0) ? false : true;

    console.log(data);
    console.log(`Surface is flat? = ${isFlat}`);
    console.log(`Angle is radian? = ${isRadian}`);
    if (isVInches) { data.vi = data.vi * 39.37; }
    if (isFlat) {
      if (isVInches && methodIndex != 1) {
        $('.result select').prop('selectedIndex', 1);
      }
      switch (methodIndex) {
        case 0: {
          ShowResult(GetFlatRange(data.vi, data.angle, isRadian));
          break;
        }
        case 1: {
          ShowResult(GetFlatFlightTime(data.vi, data.angle, isRadian));
          break;
        }
        case 2: {
          ShowResult(GetMaxHeight(data.vi, data.angle, isRadian));
        }
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

function ShowResult(result, unit) {
  $('.panel#projectile .result div').text(`Result: ${Math.round((result + Number.EPSILON) * 100) / 100}`);
}

function GetData(el) {
  let data = {};
  ($(el).children('.data')).toArray().forEach((e) => {
    data[$(e).attr('id')] = $(e).find('input').val();
  });
  return data;
}