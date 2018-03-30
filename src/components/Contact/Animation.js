export default [{
  type: "slideUp",
  range: [0, 0.5, 1],
  opacity: [0, 1, 0],
  transform: {
    position: "y",
    translate: ["30px", "0px", "30px"]
  }
}, {
  type: "slideLeft",
  range: [0, 0.5, 1],
  opacity: [0, 1, 0],
  transform: {
    position: "x",
    translate: ["30px", "0px", "30px"]
  }
}, {
  type: "fadeIn",
  range: [0, 0.5, 1],
  opacity: [0, 1, 0],
  transform: {
    scale: [1.2, 1, 0.8]
  }
}];