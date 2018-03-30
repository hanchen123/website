import _ from "lodash";

export function splitOrderType(name) {
  return {
    order: parseInt(name.match(/\d+/)[0]),
    type: name.match(/[A-Za-z]+/)[0]
  };
}

export function buildAnimation(Animated, anim, config) {
  let ret = _.assign({}, config);
  delete ret.type;
  delete ret.range;

  if (ret.hasOwnProperty("opacity")) {
    ret.opacity = anim.interpolate({
          inputRange: config.range,
          outputRange: config.opacity
        } 
      );
  }
  if (ret.hasOwnProperty("transform")) {
    ret.transform = [];
    if (config.transform.hasOwnProperty("translate")) {
      if (config.transform.position === "x") {
        ret.transform.push(createTranX(anim, config.range, config.transform.translate));
      } else if (config.transform.position === "y") {
        ret.transform.push(createTranY(anim, config.range, config.transform.translate));
      } else if (config.transform.position === "z") {
        ret.transform.push(createTranZ(anim, config.range, config.transform.translate));
      } 
    }
    if (config.transform.hasOwnProperty("scale")) {
      ret.transform.push(createScale(anim, config.range, config.transform.scale));
    }
  }
  return ret;
}

const createTranX = (anim, inputRange, outputRange) => ({
  translateX: anim.interpolate({
    inputRange: inputRange,
    outputRange: outputRange,
  })
});

const createTranY = (anim, inputRange, outputRange) => ({
  translateY: anim.interpolate({
    inputRange: inputRange,
    outputRange: outputRange,
  })
});

const createTranZ = (anim, inputRange, outputRange) => ({
  translateZ: anim.interpolate({
    inputRange: inputRange,
    outputRange: outputRange,
  })
});

const createScale = (anim, inputRange, outputRange) => ({
  scale: anim.interpolate({
    inputRange: inputRange,
    outputRange: outputRange,
  })
});