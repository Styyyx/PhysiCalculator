$('.panel#speed .buttons #btnClear').on('click', function() {
    $('.panel#speed .form .data input').val('');
});

$('.panel#speed .option select').on('change', (e) => {
  let idx = e.target.selectedIndex,
    methodSelect = $('.panel#speed .method select');
  
    methodSelect.empty();

    if (idx == 0) {
      methodSelect.append('<option>Speed</option><option>Distance</option><option>Time</option>');
    } else {
      methodSelect.append('<option>Final Velocity</option><option>Initial Velocity</option><option>Acceleration</option><option>Time</option>');
    }

  methodSelect.trigger('change');
});

$('.panel#speed .method select').on('change', (e) => {
  let optionIndex = $('.panel#speed .option select').prop('selectedIndex'),
    methodIndex = $(e.target).prop('selectedIndex'),
    form = $('.panel#speed .form'),
    dataSpeed = '<div class="data" id="speed"><div>Speed</div><input><div class="unit">m/s</div></div>',
    dataDist = '<div class="data" id="dist"><div>Distance</div><input><div class="unit">m</div></div>',
    dataSpeedTime = '<div class="data" id="speedTime"><div>Time</div><input><div class="unit">seconds</div></div>',
    dataVf = '<div class="data" id="vf"><div>Final Velocity</div><input><div class="unit">m/s</div></div>',
    dataVi = '<div class="data" id="vi"><div>Initial Velocity</div><input><div class="unit">m/s</div></div>',
    dataAcceleration = '<div class="data" id="acc"><div>Acceleration</div><input><div class="unit">m/s<sup>2</sup></div></div>',
    dataVelocityTIme = '<div class="data" id="velocityTime"><div>Time</div><input><div class="unit">seconds</div></div>';
  form.empty();
    
  $('.panel#speed .result .num').text('');
  $('.panel#speed .result .unit').text('');
  
  if (optionIndex == 0) {
    switch (methodIndex) {
      case 0: {
        form.append([dataDist, dataSpeedTime]);
        break;
      }
      case 1: {
        form.append([dataSpeed, dataSpeedTime]);
        break;
      }
      case 2: {
        form.append([dataSpeedTime, dataDist]);
        break;
      }   
    }
  } else if (optionIndex == 1) {
    switch (methodIndex) {
      case 0: {
        form.append([dataVi, dataAcceleration, dataVelocityTIme]);
        break;
      }
      case 1: {
        form.append([dataVf, dataAcceleration, dataVelocityTIme]);
        break;
      }
      case 2: {
        form.append([dataVf, dataVi, dataVelocityTIme]);
        break;
      }
      case 3: {
        form.append([dataVf, dataVi, dataAcceleration]);
        break;
      }
    }
  }
});

$('.panel#speed .buttons #btnCalculate').on('click', function () {
    if (IsFormComplete('.panel#speed .form')) {
        let methodIndex = $('.panel#speed .method select').prop('selectedIndex'),
          data = GetData('.panel#speed .form');
          isSpeed = ($('.panel#speed .option select').prop('selectedIndex') == 0) ? true : false;

      console.log(data);

      if (isSpeed)
        switch (methodIndex) {
          case 0: {
            ShowResult('speed', GetSpeed(data.dist, data.speedTime), 'meter(s)/second');
            break;
          }
          case 1: {
            ShowResult('speed', GetDist(data.speed, data.speedTime), 'meter(s)');
            break;
          }
          case 2: {
            ShowResult('speed', GetTime(data.speed, data.dist), 'sec');
            break;
          }
      } else {
        switch (methodIndex) {
          case 0: {
            ShowResult('speed', GetFinalVelocity(data.vi, data.acc, data.velocityTime), 'meters');
            break;
          }
          case 1: {
            ShowResult('speed', GetInitialVelocity(data.vf, data.acc, data.velocityTime), 'seconds');
            break;
          }
          case 2: {
            ShowResult('speed', GetAcceleration(data.vf, data.vi, data.velocityTime), 'meters');
            break;
          }
          case 3: {
            ShowResult('speed', GetTime(data.vf, data.vi, data.acc), 'meters');
          }
        }
      }
      $('.panel#speed .result .num').css('user-select', 'text');
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
  
function GetData(el) {
  let data = {};
  ($(el).children('.data')).toArray().forEach((e) => {
    data[$(e).attr('id')] = $(e).find('input').val();
  });
  return data;
}