  'use strict'
  window.renderStatistics = function(ctx, names, times) {

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.fillRect(100, 10, 420, 270);


    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура, вы победили!', 120, 40);
    ctx.fillText('Список результатов:  ', 120, 60);

    var max = -1;
    var maxIndex = -1;

    for(var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
        }
    }

    var histogramWidth = 150;
    var step = histogramWidth/max;

    ctx.fillText("Худшее время:" + max, 120, 80);

    // times - array with times
    // names - array with names

    var arr = [];

    for(var i = 0; i < names.length; i++) {
      var name = names[i];
      var time = times[i];
      var ass;
      var addGum;


      if (time === max) {
        ass = '*';
      } else {
        ass = '';
      }

      if (name === 'Вы') {
        addGum = '&';
      } else {
        addGum = '';
      }

      console.log(name + ' ' + time + ' ' + ass + ' ' + addGum);
    }

    console.log(arr); // array of objects like {name: "Антон", time: 1234}

    // sort by time
    // print with places

    //ctx.textBaseline = 'top';

/*    for(var i =0; i < times.length; i++ ) {

      var barHeight = 20;
      var indent = 40;
      var initialX = 120;
      var initialY = 80;

      ctx.fillRect(initialX, initialY + indent * 1, times[i]*step, barHeight )
      ctx.fillText(names[i], initialX, histogramWidth, initialY*indent*1)
    }*/

  };
