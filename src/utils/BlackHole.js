/* global window document requestAnimationFrame */

const init = (num, distance) => {
    const canvas = document.getElementById("blackHole");
    const ctx = canvas.getContext("2d");

    let firstLoad = true;
    let R = [];
    const rect = function(x, y, w, h, color, angle, radius, angularSpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.angle = angle;
        this.radius = radius;
        this.angularSpeed = angularSpeed;
    };
    const colorList = ["#aee4df", "#99dcd5", "#2cb0a6", "#16a99d", "#007574", "#006b6c"];

    function init() {
      for (let i = 0; i < num; i++) {
        const idx = Math.floor(Math.random() * colorList.length);
        let x = canvas.width / 2,
            y = canvas.height / 2,
            w = Math.random() * 5,
            h = w,
            color = colorList[idx],
            angle = Math.random() * 2 * Math.PI,
            radius = Math.random() * (canvas.width + canvas.height) / 3 + distance,
            angularSpeed = .3 * Math.random() * Math.PI / radius;

        R.push(
          new rect(x, y, w, h, color, angle, radius, angularSpeed)
        );
      }
    }

    function setSize() {
      const sw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const sh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      canvas.width = sw - 100;
      canvas.height = sh;
    }

    function setBG() {
      ctx.fillStyle = "#e4f4f3";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawRect() {
      setSize();
      setBG();
      if (firstLoad) {
        firstLoad = false;
        init();
      }
      
      for (let i = 0; i < R.length; i++) {
        ctx.fillStyle = R[i].color;
        ctx.fillRect(R[i].x, R[i].y, R[i].w, R[i].h);
        R[i].x = canvas.width / 2 + Math.cos(R[i].angle) * R[i].radius;
        R[i].y = canvas.height / 2 + Math.sin(R[i].angle) * R[i].radius;
        R[i].angle += R[i].angularSpeed;
      }
      requestAnimationFrame(drawRect);
    }
    drawRect();
}

export default init;