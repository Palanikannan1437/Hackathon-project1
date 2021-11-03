import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
function Animation2() {
  const [toggle, setToggle] = useState(false)
  const styles = useSpring({
      config:{friction: 100},
      from:{width: "100px", height: "100px"},
      to:{width: toggle? "500px":"100px", height: toggle? "500px":"100px"},
  });
  const animate = () => {
    setToggle(true);
  }
  return (
    <div>
      <div style={{ margin: "auto" }}>
        <button onClick={animate}>Click</button>
      </div>
      <animated.div className="animated-div" style={styles}></animated.div>
    </div>
  );
}

export default Animation2;
