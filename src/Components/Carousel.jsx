import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Carousel.css";

function Carousel({ carouselImages }) {
  const [current, setCurrent] = useState(0);
  const [carouselAutoPlay, setCarouselAutoPlay] = useState(true);
  const [offset, setOffset] = useState(0);
  const timeOut = useRef(null);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const nextImage = () => {
    setCurrent((c) => (c === carouselImages.length - 1 ? 0 : c + 1));
  };
  const previousImage = () => {
    setCurrent((c) => (c === 0 ? carouselImages.length - 1 : c - 1));
  };

  useEffect(() => {
    timeOut.current = carouselAutoPlay && setTimeout(nextImage, 15000);
    return () => clearTimeout(timeOut.current);
  }, [current, carouselAutoPlay]);

  const calculateOffset = () => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;
    const firstCard = wrapper.children[0];
    if (!firstCard) return;

    const containerWidth = container.offsetWidth;
    const cardWidth = firstCard.offsetWidth;
    const gap = parseFloat(getComputedStyle(wrapper).gap) || 0;

    const centered = (containerWidth - cardWidth) / 2;
    const shift = current * (cardWidth + gap);

    setOffset(centered - shift);
  };

  useLayoutEffect(calculateOffset, [current, carouselImages]);
  useEffect(() => {
    window.addEventListener("resize", calculateOffset);
    return () => window.removeEventListener("resize", calculateOffset);
  }, []);

  return (
    <div className="carousel-main">
      <div className="carousel-container" ref={containerRef}>
        <div
          className="image-wrapper"
          ref={wrapperRef}
          style={{ transform: `translateX(${offset}px)` }}
          onMouseEnter={() => {
            setCarouselAutoPlay(false);
            clearTimeout(timeOut.current);
          }}
          onMouseLeave={() => setCarouselAutoPlay(true)}
        >
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={index === current ? "carousel-card carousel-card-active" : "carousel-card"}
            >
              <img className="card-image" src={image.image} alt="" />
            </div>
          ))}
        </div>
 <div className="carousel-stage">
        <div className="carousel-arrow-left">
          <button className="icon-button-left" aria-label="Voltar para o banner anterior" onClick={previousImage}>
            <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" viewBox="0 0 24 24">
              <path d="M2 12.375c0-.345.28-.625.625-.625h18.75a.625.625 0 1 1 0 1.25H2.625A.625.625 0 0 1 2 12.375"></path>
              <path d="M11.817 3.183a.625.625 0 0 1 0 .884l-8.308 8.308 8.308 8.308a.625.625 0 1 1-.884.884l-8.75-8.75a.625.625 0 0 1 0-.884l8.75-8.75a.625.625 0 0 1 .884 0"></path>
            </svg>
          </button>
        </div>
        <div className="carousel-arrow-right">
          <button className="icon-button-right" aria-label="Avançar para o próximo banner" onClick={nextImage}>
            <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" viewBox="0 0 24 24">
              <path d="M2 12.375c0-.345.28-.625.625-.625h18.75a.625.625 0 1 1 0 1.25H2.625A.625.625 0 0 1 2 12.375"></path>
              <path d="M12.183 3.183a.625.625 0 0 1 .884 0l8.75 8.75a.625.625 0 0 1 0 .884l-8.75 8.75a.625.625 0 1 1-.884-.884l8.308-8.308-8.308-8.308a.625.625 0 0 1 0-.884"></path>
            </svg>
          </button>
        </div>
        </div>
</div>
        <div className="carousel-pagination">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={index === current ? "carousel-index carousel-index-active" : "carousel-index"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    
  );
}

export default Carousel;



// import React, { useEffect, useRef, useState } from "react";
// import "./Carousel.css"

// function Carousel({ carouselImages }) {
//   const [current, setCurrent] = useState(0);
//   const [carouselAutoPlay, setCarouselAutoPlay] = useState(true);
//   const timeOut = useRef(null);

//   useEffect(() => {
//     timeOut.current = carouselAutoPlay && setTimeout(nextImage, 15000);
//    return () => {clearTimeout(timeOut.current)}
//   }, [current, carouselAutoPlay]);

//   const nextImage = () => {
//     setCurrent(current === carouselImages.length - 1 ? 0 : current + 1);
//   };

//   const previousImage = () => {
//     setCurrent(current === 0 ? carouselImages.length - 1 : current - 1);
//   };
//   return (
//     <div className="carousel-main">
//     <div className="carousel-container">
//       <div
//         className="image-wrapper" style={{
//         transform: `translateX(calc(15% - ${current} * 74%))`
//         }}
//         onMouseEnter={() => {
//           setCarouselAutoPlay(false);
//           clearTimeout(timeOut.current);
//         }}
//         onMouseLeave={() => setCarouselAutoPlay(true)}
//       >
//         {carouselImages.map((image, index) => {
//           return (
//             <div
//               key={index}
//               className={
//                 index === current
//                   ? "carousel-card carousel-card-active"
//                   : "carousel-card"
//               }
//             >
//               <img className="card-image" src={image.image} alt="" />
//             </div>
            
            
//           );
//         })}
//       </div>
//       <div className="carousel-arrow-left">
//         <button
//           className="icon-button-left"
//           aria-label="Voltar para o banner anterior"
//           onClick={previousImage}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fillRule="evenodd"
//             viewBox="0 0 24 24"
//           >
//             <path d="M2 12.375c0-.345.28-.625.625-.625h18.75a.625.625 0 1 1 0 1.25H2.625A.625.625 0 0 1 2 12.375"></path>
//             <path d="M11.817 3.183a.625.625 0 0 1 0 .884l-8.308 8.308 8.308 8.308a.625.625 0 1 1-.884.884l-8.75-8.75a.625.625 0 0 1 0-.884l8.75-8.75a.625.625 0 0 1 .884 0"></path>
//           </svg>
//         </button>
//       </div>
//       <div className="carousel-arrow-right">
//         <button
//           className="icon-button-right"
//           aria-label="Avançar para o próximo banner"
//           onClick={nextImage}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fillRule="evenodd"
//             viewBox="0 0 24 24"
//           >
//             <path d="M2 12.375c0-.345.28-.625.625-.625h18.75a.625.625 0 1 1 0 1.25H2.625A.625.625 0 0 1 2 12.375"></path>
//             <path d="M12.183 3.183a.625.625 0 0 1 .884 0l8.75 8.75a.625.625 0 0 1 0 .884l-8.75 8.75a.625.625 0 1 1-.884-.884l8.308-8.308-8.308-8.308a.625.625 0 0 1 0-.884"></path>
//           </svg>
//         </button>
//       </div>
//       <div className="carousel-pagination">
//              {carouselImages.map((image, index) => {
//           return (
//       <div className={
//                   index === current
//                     ? "carousel-index carousel-index-active"
//                     : "carousel-index"
//                 }
//                 onClick={() => setCurrent(index)}
//                 >
//             </div>
//           );
//         })}
//                       </div>
//     </div>
//     </div>
//   );
// }

// export default Carousel;
