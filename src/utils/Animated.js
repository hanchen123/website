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
    ret.transform = Animated.template`
        translate3d(${config.transform.position === "x" ? anim.interpolate({
          inputRange: config.range,
          outputRange: config.transform.translate
        }
      ) : 0}, ${config.transform.position === "y" ? anim.interpolate({
          inputRange: config.range,
          outputRange: config.transform.translate
        }
      ) : 0}, ${config.transform.position === "z" ? anim.interpolate({
          inputRange: config.range,
          outputRange: config.transform.translate
        }
      ) : 0}) ${ret.hasOwnProperty("scale") ? "scale"(anim.interpolate({
          inputRange: config.range,
          outputRange: config.transform.scale
        }
      )) : ""}`;
  }
  return ret;
}