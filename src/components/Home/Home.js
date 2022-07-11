import * as React from "react";
// import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  Vector,
  forces,
} from "react-particle-image";
import classes from './Home.module.css'

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 150;
  },
  color: ({ x, y, image }) => "#ffffff",
  radius: () => Math.random() * 1.0 + 0.5,
  mass: () => 200,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

export default function Home() {
  // const size = useWindowSize({
  //   // width: window.innerWidth,
  //   // height: window.innerHeight,
  // });

  return (
    <ParticleImage
      src={"/ts-logo-1.png"}
      className={classes.Home}
      // width={(size.width)}
      // height={(size.height)}
      scale={0.55}
      entropy={20}
      maxParticles={5000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#191D1F"
      // backgroundColor="red"
    />
  );
}