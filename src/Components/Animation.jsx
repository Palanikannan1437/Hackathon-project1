import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Animation() {
  const [toggle, setToggle] = useState(false);
  const styles = useSpring({
    config: { friction: 100 },
    to: {opacity: toggle ? 1 : 0, translateX: toggle ? "0px" : "-100px" },
  });

  const animateDiv = () => {
    setToggle(true);
  };

  return (
    <div>
      <div style={{ margin: "auto" }}>
        <button onClick={animateDiv}>Click</button>
      </div>
      <animated.div className="animated-div" style={styles}></animated.div>
    </div>
  );
}

export default Animation;
