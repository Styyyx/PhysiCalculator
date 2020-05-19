$('.panel#speed .buttons #btnClear').on('click', function(){
    $('.panel#speed .form .data input').val('');
});

$('.panel#speed .method select').on('change', (e) => {
    let idx = e.target.selectedIndex;
    form = $('.panel#speed .form'),
    dataSpeed = '<div class="data" id="speed"><div>Speed</div><input><div class="unit">m/s</div></div>',
    dataDist = '<div class="data" id="dist"><div>Distance</div><input><div class="unit">m</div></div>',
    dataTime = '<div class="data" id="time"><div>Time</div><input><div class="unit">seconds</div></div>';
    form.empty();
    
    $('.panel#speed .result .num').text('');
    $('.panel#speed .result .unit').text('');
    
    switch (idx) {
        case 0: {
            form.append([dataDist, dataTime]);
            break;
        }
        case 1: {
            form.append([dataSpeed, dataTime]);
            break;
        }
        case 2: {
            form.append([dataSpeed, dataDist]);
            break;
        }
    }
});

$('.panel#speed .buttons #btnCalculate').on('click', function () {
    if (IsFormComplete('.panel#speed .form')) {
        let methodIndex = $('.panel#speed .method select').prop('selectedIndex'),
          data = GetData('.panel#speed .form');

        console.log(data);
        //   switch (methodIndex) {
        //     case 0: {
        //       ShowResult(GetSpeed(data.dist, data.time), 'm/s');
        //       break;
        //     }
        //     case 1: {
        //       ShowResult(GetDist(data.speed, data.time), 'm');
        //       break;
        //     }
        //     case 2: {
        //       ShowResult(GetTime(data.speed, data.dist), 'sec');
        //       break;
        //     }
        // }
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
  
function ShowResult(result, unit) {
    $('.panel#speed .result .num').text(`${Math.round((result + Number.EPSILON) * 100) / 100}`);
    $('.panel#speed .result .unit').text(unit);
}
  
function GetData(el) {
    let data = {};
    ($(el).children('.data')).toArray().forEach((e) => {
        data[$(e).attr('id')] = $(e).find('input').val();
    });
    return data;
}