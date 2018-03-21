/* global window document requestAnimationFrame jsAnimation */

const init = () => {
  let counter = 0;

  window.addEventListener("resize", draw);

  function animationFn (s, e, t ,d) {
    return s + (e - s) * jsAnimation.easeInOutCubic(t/d);
  }

  function drawC(constant, duration, frame, startFrame, endFrame) {
    const ctx = constant.canvas;
    let xPosition, yPosition, lineWidth, radius, currentFrame, strokeStyle;

    switch(true) {
      case (frame < duration.one): 
        xPosition = startFrame.x;
        yPosition = startFrame.y;
        lineWidth = startFrame.line;
        radius = startFrame.radius;
        currentFrame = animationFn(startFrame.point, endFrame.point, frame, duration.one);
        strokeStyle = startFrame.color;
        break;
      case (frame < duration.two): 
        if (constant.clientSize === "lg") {
          xPosition = animationFn(startFrame.x, endFrame.x, frame - duration.one, duration.two - duration.one);
          yPosition = startFrame.y;
          lineWidth = animationFn(startFrame.line, endFrame.line, frame - duration.one, duration.two - duration.one);
          radius = animationFn(startFrame.radius, endFrame.radius, frame - duration.one, duration.two - duration.one);
        } else {
          xPosition = startFrame.x;
          yPosition = animationFn(startFrame.y, endFrame.y, frame - duration.one, duration.two - duration.one);
          lineWidth = animationFn(startFrame.line, endFrame.lineM, frame - duration.one, duration.two - duration.one);
          radius = animationFn(startFrame.radius, endFrame.radiusM, frame - duration.one, duration.two - duration.one);
        }
        currentFrame = endFrame.point;
        strokeStyle = startFrame.color;
        break;  
      case (frame < duration.three): 
        if (constant.clientSize === "lg") {
          xPosition = endFrame.x;
          yPosition = startFrame.y;
          lineWidth = endFrame.line;
          radius = endFrame.radius;
        } else {
          xPosition = startFrame.x;
          yPosition = endFrame.y;
          lineWidth = endFrame.lineM;
          radius = endFrame.radiusM;
        }
        currentFrame = endFrame.point;
        strokeStyle = endFrame.color;
        break; 
      default: 
        break;
    }

    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = constant.globalAlpha;
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, radius, startFrame.point, currentFrame);
    ctx.stroke();
  }

  function drawH(constant, duration, frame, startFrame, endFrame) {
    const ctx = constant.canvas;
    let xPosition, yPosition, lineWidth, radius, globalAlpha, strokeStyle;

    switch(true) {
      case (frame < duration.one):
        xPosition = startFrame.x;
        yPosition = startFrame.y;
        lineWidth = startFrame.line;
        radius = startFrame.radius;
        globalAlpha = animationFn(startFrame.opacity, endFrame.opacity, frame, duration.one);
        strokeStyle = startFrame.color;
        break;
      case (frame < duration.two): 
        if (constant.clientSize === "lg") {
          xPosition = animationFn(startFrame.x, endFrame.x, frame - duration.one, duration.two - duration.one);
          yPosition = startFrame.y;
          lineWidth = animationFn(startFrame.line, endFrame.line, frame - duration.one, duration.two - duration.one);
          radius = animationFn(startFrame.radius, endFrame.radius, frame - duration.one, duration.two - duration.one);
        } else {
          xPosition = startFrame.x;
          yPosition = animationFn(startFrame.y, endFrame.y, frame - duration.one, duration.two - duration.one);
          lineWidth = animationFn(startFrame.line, endFrame.lineM, frame - duration.one, duration.two - duration.one);
          radius = animationFn(startFrame.radius, endFrame.radiusM, frame - duration.one, duration.two - duration.one);
        }
        globalAlpha = 1;
        strokeStyle = startFrame.color;
        break;
      case (frame < duration.three): 
        if (constant.clientSize === "lg") {
          xPosition = endFrame.x;
          yPosition = startFrame.y;
          lineWidth = endFrame.line;
          radius = endFrame.radius;
        } else {
          xPosition = startFrame.x;
          yPosition = endFrame.y;
          lineWidth = endFrame.lineM;
          radius = endFrame.radiusM;
        }
        globalAlpha = 1;
        strokeStyle = endFrame.color;
        break;
      default: 
        break;
    }
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, radius, 0.7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, radius, 1.7*Math.PI, 0.3*Math.PI);
    ctx.moveTo(xPosition - radius, yPosition);
    ctx.lineTo(xPosition + radius, yPosition);
    ctx.stroke();
  }

  function setCanvas(constant, duration, frame, startFrame, endFrame) {
    const ctx = constant.canvas;
    switch(true) {
      case (frame < duration.one):
        ctx.canvas.width  = startFrame.x;
        ctx.canvas.height = startFrame.y;
        break;
      case (frame < duration.two):
        if (constant.clientSize === "lg") {
          ctx.canvas.width = animationFn(startFrame.x, endFrame.x, frame - duration.one, duration.two - duration.one);
          ctx.canvas.height = startFrame.y;
        } else {
          ctx.canvas.width = startFrame.x;
          ctx.canvas.height = animationFn(startFrame.y, endFrame.y, frame - duration.one, duration.two - duration.one);
        }
        break;
      case (frame < duration.three):
        if (constant.clientSize === "lg") {
          ctx.canvas.width = endFrame.x;
          ctx.canvas.height = startFrame.y;
        } else {
          ctx.canvas.width = startFrame.x;
          ctx.canvas.height = endFrame.y;
        }
        break;
      default: 
        break;
    }
  }

  function drawNav(constant, duration, frame, startFrame, endFrame) {
    const ctx = constant.canvas;

    function setGradient(gradient, ctx) {
      gradient.addColorStop(0, "#0d9d92");
      gradient.addColorStop(1, "#54aaaf");
      ctx.fillStyle = gradient;
    }

    switch(true) {
      case (frame < duration.one):
        break;
      case (frame < duration.two):
        break;
      case (frame < duration.three):
        if (constant.clientSize === "lg") {
          const top = animationFn(startFrame.top, endFrame.top, frame - duration.two, duration.three - duration.two);
          const bottom = animationFn(startFrame.bottom, endFrame.bottom, frame - duration.two, duration.three - duration.two);
          const gradient = ctx.createLinearGradient(0, 0, 0, constant.y);
          setGradient(gradient, ctx);
          ctx.fillRect(0, 0, constant.width, constant.y);

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(0, top);
          ctx.lineTo(constant.width, top);
          ctx.lineTo(constant.width, 0);
          ctx.lineTo(0, 0);
          ctx.closePath();

          ctx.moveTo(0, bottom);
          ctx.lineTo(constant.width, bottom);
          ctx.lineTo(constant.width, constant.y);
          ctx.lineTo(0, constant.y);
          ctx.closePath();
          ctx.clip();

          ctx.beginPath();
          ctx.fillStyle = "#e4f4f3";
          ctx.fillRect(0, 0, constant.width, constant.y);
          ctx.restore();
        } else {
          const left = animationFn(startFrame.left, endFrame.left, frame - duration.two, duration.three - duration.two);
          const right = animationFn(startFrame.right, endFrame.right, frame - duration.two, duration.three - duration.two);
          const gradient = ctx.createLinearGradient(0, 0, constant.x, 0);
          setGradient(gradient, ctx);
          ctx.fillRect(0, 0, constant.x, constant.height);

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(left, 0);
          ctx.lineTo(left, constant.height);
          ctx.lineTo(0, constant.height);
          ctx.lineTo(0, 0);
          ctx.closePath();

          ctx.moveTo(right, 0);
          ctx.lineTo(right, constant.height);
          ctx.lineTo(constant.x, constant.height);
          ctx.lineTo(constant.x, 0);
          ctx.closePath();
          ctx.clip();

          ctx.beginPath();
          ctx.fillStyle = "#e4f4f3";
          ctx.fillRect(0, 0, constant.x, constant.height);
          ctx.restore();
        }
        break;
      default: 
        break;
    }
  }

  function draw() {
    const sw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const sh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const clientSize = sw < 769 ? "sm" : "lg";
    const ctx = document.getElementById("canvasHeader").getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    setCanvas({canvas: ctx, clientSize: clientSize}, {one: 50, two: 100, three: 150}, counter,
      {x: sw, y: sh},
      {x: 100, y: 70});
    drawNav({canvas: ctx, clientSize: clientSize, width: 100, height: 70, x: sw, y: sh}, 
      {one: 50, two: 100, three: 150}, counter,
      {top: sh/2, bottom: sh/2, left: sw/2, right: sw/2},
      {top: 0, bottom: sh, left: 0, right: sw});
    drawC({canvas: ctx, clientSize: clientSize, globalAlpha: 1}, {one: 50, two: 100, three: 150}, counter,
      {point: 0.1 * Math.PI, radius: 100, line: 15, color: "#01a093", x: sw/2, y: sh/2}, 
      {point: 1.9 * Math.PI, radius: 30, radiusM: 20, line: 4.5, lineM: 3, color: "#90ffee", x: 50, y: 35});
    drawH({canvas: ctx, clientSize: clientSize}, {one: 50, two: 100, three: 150}, counter,
      {opacity: 0, radius: 70, line: 15, color: "#007574", x: sw/2, y: sh/2}, 
      {opacity: 1, radius: 21, radiusM: 14, line: 4.5, lineM: 3, color: "#20ecbe", x: 50, y: 35});

    if (counter < 149) {
      counter++;
      requestAnimationFrame(draw);
    }

  }
  draw();
};

export default init;
