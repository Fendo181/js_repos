'use strict';

(() => {
  // 描画クラス
  class ClockDrawer {
    constructor (canvas) {
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
    }

    // 描画処理
    draw (angle, func) {
      this.ctx.save();
      // 盤面の中心を真ん中にする
      this.ctx.translate(this.width / 2, this.height / 2);
      // angle をラジアンに変換しつつ rotate させて回す
      this.ctx.rotate(2 * Math.PI / 360 * angle);
      this.ctx.beginPath();

      // 描画をする
      func(this.ctx);
      // 線を描画する
      this.ctx.stroke();
      this.ctx.restore();
    }
  }

  // 時計の盤面クラス
  class Clock {
    constructor (drawer) {
      // 半径
      this.r = 100;
      this.drawer = drawer;
    }

    drawFace () {
      // 盤面作成
      for (let angle = 0; angle < 360; angle += 6) {
        this.drawer.draw(angle, ctx => {
          ctx.moveTo(0, -this.r);
          if (angle % 30 === 0) {
            // 文字を太くする
            ctx.lineWidth = 2;
            ctx.lineTo(0, -this.r + 10);
            ctx.font = '13px Arial';
            ctx.textAlign = 'center';

            // 半径から25下がったところに数字を描画する
            // 0のところは ||演算子で12が入るようにする
            ctx.fillText(angle / 30 || 12, 0, -this.r + 25);
          } else {
          // 5px分真下に引く
            ctx.lineTo(0, -this.r + 5);
          }
        });
      }
    }
    run () {
      this.drawFace();
    }
  }

  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }
  const clock = new Clock(new ClockDrawer(canvas));
  clock.run();
})();
