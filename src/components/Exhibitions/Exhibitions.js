import classes from './Exhibitions.module.css'
import {motion} from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import images from './../Exhibitions/images'

const Exhibitions = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return ( 
    <div className={classes.Exhibitions}>
      <motion.div ref={carousel} className={classes.Carousel}>
        <motion.div 
          drag='x' 
          dragConstraints={{ right: 0, left: -width }}
          className={classes.InnerCarousel}>
          {images.map(image => {
            return (
              <motion.div className={classes.Item} key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Exhibitions;