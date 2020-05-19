$('.panel#speed .buttons #btnClear').on('click', function(){
    $('.panel#speed .form .data input').val('');
});

$('.panel#speed .method select').on('change', (e) => {
    let idx = e.target.selectedIndex;
    form = $('.panel#speed .form'),
    dataSpeed = '<div class="data" id="speed"><div>Speed</div><input><div class="unit">m/s</div></div>',
    dataDist = '<div class="data" id="dist"><div>Distance</div><input><div class="unit">m/s</div></div>',
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