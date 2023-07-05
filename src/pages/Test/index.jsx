// import "./style.css";
// import { useState } from "react";

import { PriceChart, RegisterComment, RegisterQuestion } from "../../components"

// function Test() {

//   const [curSlide, setCurSlide] = useState(0);
//   const slides = [...document.getElementsByClassName("slide")];
//   console.log(slides)
//   const maxSlide = slides.length;

//   const createDots = () => {
//     return slides.map((_, i) => (
//       <button
//         key={i}
//         className={`dots__dot ${curSlide === i ? 'dots__dot--active' : ''}`}
//         onClick={() => goToSlide(i)}
//       ></button>
//     ));
//   };

//   const activateDot = (slide) => {
//     setCurSlide(slide);
//   };

//   const goToSlide = (slide) => {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//     activateDot(slide);
//   };

//   const nextSlide = () => {
//     const newSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
//     goToSlide(newSlide);
//   };

//   const prevSlide = () => {
//     const newSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
//     goToSlide(newSlide);
//   };

//     return (
      
//       <div className="slider">
//         <div id="slide" className="slide">
//           <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9fd370f2d50b54b3325b33dc86e9b9429101bd16_1688218520.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />
//         </div>

//         <div id="slide" className="slide">
//         <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9fd370f2d50b54b3325b33dc86e9b9429101bd16_1688218520.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />
//         </div>

//         <div id="slide" className="slide">
//         <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9fd370f2d50b54b3325b33dc86e9b9429101bd16_1688218520.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />
//         </div>

//         <button className="slider__btn slider__btn--left" onClick={prevSlide}>&larr;</button>
//         <button className="slider__btn slider__btn--right" onClick={nextSlide}>&rarr;</button>
//         <div className="dots">{createDots()}</div>
//       </div>
    
//   )
// }

// export default Test;



function Test() {
  
  return (
    <>
      <RegisterQuestion/>
    </>
  )
}

export default Test