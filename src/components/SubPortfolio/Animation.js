export default [{
  type: "slideUp",
  range: [0, 0.5, 1],
  opacity: [0, 1, 0],
  transform: {
    position: "y",
    translate: ["50px", "0px", "-100px"]
  }
}, {
  type: "slideLeft",
  range: [0, 0.5, 1],
  opacity: [0, 1, 0],
  transform: {
    position: "x",
    translate: ["150px", "0px", "-150px"]
  }
}, {
  type: "popUp",
  range: [0, 0.5, 1],
  opacity: [0, 1, 0],
  transform: {
    position: "xy",
    translate: {
      x: ["30%", "0%", "30%"],
      y: ["30%", "0%", "30%"],
    },
    scale: ["0.7", "1", "0.5"]
  }
}];