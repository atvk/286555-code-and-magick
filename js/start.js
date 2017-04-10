
'use strict';
window.renderStatistics = function(ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);

  var max = - 1;

  for(var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var historamHeight = 150;
  var step =  historamHeight/max;
  var indent = 90;
  var initialX = 150;
  var initialY = 230;
  var nameinitialY = 260;
  var timeinitialY = 80;
  var ColumnWidth = 40;



  for(var i = 0; i < names.length; i++) {
    var name = names[i];
    if (name === 'Вы') {

      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX + indent * i, initialY + 10, ColumnWidth, -times[i] * step);
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], initialX + indent*i, nameinitialY);
      ctx.fillText(times[i].toFixed(0), initialX + indent*i, timeinitialY);

    } else {

            function getRandomOpacity(min, max) {

                  return Math.random() * (max - min) + min;
            }

            function getColorWithRandomOpacity() {

                  return 'rgba(0, 0, 255, ' + getRandomOpacity(0.2, 1) + ')'

            }

    ctx.fillStyle = getColorWithRandomOpacity();
    ctx.fillRect(initialX + indent * i, initialY + 10, ColumnWidth, -times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + indent*i, nameinitialY);
    ctx.fillText(times[i].toFixed(0), initialX + indent*i, timeinitialY);

    }
  }
};
