/** Notes:
 * 
 * On change of missing variable, also update result select options
 * 
 * 
 */

$('.panel#projectile .title select').on('change', (e) => {
  let idx = e.target.selectedIndex,
    methodSelect = $('.panel#projectile .method select');
  methodSelect.empty();
  if (idx == 0) {
    methodSelect.append('<option>Range</option><option>Time of Flight</option><option>Max Height</option><option>Final Velocity</option>');
  } else {
    methodSelect.append('<option>Range</option><option>Time of Flight</option><option>Max Height</option><option>Initial Height</option>');
  }
  methodSelect.trigger('change');
});

$('.panel#projectile .method select').on('change', (e) => {
  let surfaceIndex = $('.panel#projectile .title select').prop('selectedIndex'),
    methodIndex = $(e.target).prop('selectedIndex'),
    form = $('.panel#projectile .form'),
    dataVi = '<div class="data" id="vi"><div>Initial Velocity</div><input><div class="unit">m/s</div></div>',
    dataAngle = '<div class="data" id="angle"><div>Angle &theta;</div><input><div class="unit">degrees</div></div>',
    dataIheight = '<div class="data" id="iheight"><div>Initial Height</div><input><div class="unit">meters</div></div>',
    dataTime = '<div class="data" id="time"><div>Time</div><input><div class="unit">seconds</div></div>';
  form.empty();
  $('.panel#projectile .result .num').text('');
  $('.panel#projectile .result .unit').text('');
  if (surfaceIndex == 0) {
    if (methodIndex == 3) {
      form.append([dataVi, dataAngle, dataTime]);
    } else {
      form.append([dataVi, dataAngle]);
    }
  } else if (surfaceIndex == 1) {
    switch (methodIndex) {
      case 0: {
        form.append([dataVi, dataAngle, dataTime]);
        break;
      }
      case 1: {
        form.append([dataVi, dataAngle, dataIheight]);
        break;
      }
      case 2: {
        form.append([dataVi, dataAngle]);
        break;
      }
      case 3: {
        form.append([dataVi, dataAngle, dataTime]);
        break;
      }
    }
  }
});

$('.panel#projectile #btnSolve').on('click', function () {
  if (IsFormComplete('.panel#projectile .form')) {
    let methodIndex = $('.panel#projectile .method select').prop('selectedIndex'),
      data = GetData('.panel#projectile .form'),
      isFlat = ($('.panel#projectile .title select').prop('selectedIndex') == 0) ? true : false;

    console.log(data);
    if (isFlat) {
      switch (methodIndex) {
        case 0: {
          ShowResult(GetFlatRange(data.vi, data.angle), 'meters');
          break;
        }
        case 1: {
          ShowResult(GetFlatFlightTime(data.vi, data.angle), 'seconds');
          break;
        }
        case 2: {
          ShowResult(GetMaxHeight(data.vi, data.angle), 'meters');
          break;
        }
        case 3: {
          ShowResult(GetFlatFinalVelocity(data.vi, data.angle, data.time), 'm/s');
          break;
        }
      }
    } else {
      switch (methodIndex) {
        case 0: {
          ShowResult(GetUnevenRange(data.vi, data.angle, data.time), 'meters');
          break;
        }
        case 1: {
          ShowResult(GetUnevenFlightTime(data.vi, data.angle, data.iheight), 'seconds');
          break;
        }
        case 2: {
          ShowResult(GetMaxHeight(data.vi, data.angle), 'meters');
          break;
        }
        case 3: {
          ShowResult(GetUnevenInitialHeight(data.vi, data.angle, data.time), 'meters');
        }
      }
    }
    $('.panel#projectile .result .num').css('user-select', 'text');
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
  $('.panel#projectile .result .num').text(`${Math.round((result + Number.EPSILON) * 100) / 100}`);
  $('.panel#projectile .result .unit').text(unit);
}

function GetData(el) {
  let data = {};
  ($(el).children('.data')).toArray().forEach((e) => {
    data[$(e).attr('id')] = $(e).find('input').val();
  });
  return data;
}