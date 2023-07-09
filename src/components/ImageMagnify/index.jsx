import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';

const ImageMagnify = ({ product }) => {
  const magnify = useRef();
  const small = useRef();
  const large = useRef();
  const zoomWrapper = useRef();
  const zoomPlace = useRef();
  const [projectedWidth, setProjectedWidth] = useState(0);
  const [projectedHeight, setProjectedHeight] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      zoomPlace.current.style.background = `url(${product?.thumbnail}) no-repeat`;
      setProjectedWidth(small.current.offsetWidth);
      setProjectedHeight(small.current.offsetHeight);

      const magnifyOffset = magnify.current.getBoundingClientRect();
      let mx = e.pageX - magnifyOffset.left;
      const my = e.pageY - magnifyOffset.top;
      if (
        mx < magnifyOffset.width &&
        my < magnifyOffset.height &&
        mx > 0 &&
        my > 0
      ) {
        large.current.style.display = "block";
        zoomPlace.current.style.display = "block";
        zoomWrapper.current.style.display = "block";
      } else {
        large.current.style.display = "none";
        zoomPlace.current.style.display = "none";
        zoomWrapper.current.style.display = "none";
      }

      if (large.current.style.display === "block") {
        const smallMagePositionX =
          Math.round(
            (mx / small.current.offsetWidth) * projectedWidth -
              zoomPlace.current.offsetWidth / 5
          ) * -1;
        const smallMagePositionY =
          Math.round(
            (my / small.current.offsetHeight) * projectedHeight -
              zoomPlace.current.offsetHeight / 10
          ) * -1;
        const bgp = smallMagePositionX + "px" + smallMagePositionY + "px";

        const px = mx - large.current.offsetWidth / 2;
        const py = my - large.current.offsetHeight / 2;

        large.current.style.top = py + "px";
        large.current.style.left = px + "px";
        large.current.style.backgroundPositionX = smallMagePositionX + "px";
        large.current.style.backgroundPositionY = smallMagePositionY + "px";
        zoomPlace.current.style.backgroundPositionX = smallMagePositionX + "px";
        zoomPlace.current.style.backgroundPositionY = smallMagePositionY + "px";
      }
    };

    const handleMouseLeave = () => {
      large.current.style.display = "none";
      zoomPlace.current.style.display = "none";
      zoomWrapper.current.style.display = "none";
    };

    magnify.current.addEventListener("mousemove", handleMouseMove);
    magnify.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      magnify.current.removeEventListener("mousemove", handleMouseMove);
      magnify.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [projectedWidth, projectedHeight, product?.thumbnail]);

  return (
    <div className="">
      {/* thumbnail */}
      <div
        ref={magnify}
        className="hidden w-full cursor-crosshair h-auto Laptop-L:!block relative"
      >
        <div className="relative">
          <div
            ref={large}
            className="w-11/12 h-40 absolute z-[1] hidden bg-[#860f0f] opacity-25"
          ></div>
          <div className="aspect-w-12 aspect-h-14">
            <motion.div ref={small}>
                <img src={product.thumbnail} alt="" className="object-contain w-full h-full" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* thumbnail magnify image */}
      <div
        ref={zoomWrapper}
        className="bg-white absolute left-[5%] top-48 min-[1280px]:top-[280px] hidden overflow-hidden w-[60%] h-[600px] min-[1280px]:h-[550px]  drop-shadow-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md z-[1]"
      >
        <div ref={zoomPlace} className="absolute w-full h-full"></div>
      </div>
    </div>
  );
};

export default ImageMagnify;
