import React, { useEffect, useState } from "react";
import "./Carousel.css"

function Carousel({ carouselImages }) {
  const [current, setCurrent] = useState(0);
  const [carouselAutoPlay, setCarouselAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut = carouselAutoPlay && setTimeout(nextImage, 7000);
  });

  const nextImage = () => {
    setCurrent(current === carouselImages.length - 1 ? 0 : current + 1);
  };

  const previousImage = () => {
    setCurrent(current === 0 ? carouselImages.length - 1 : current - 1);
  };
  return (
    <div className="main-div">
      <div
        className="carousel-container"
        onMouseEnter={() => {
          setCarouselAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => setCarouselAutoPlay(true)}
      >
        {carouselImages.map((carouselImages, index) => {
          return (
            <div
              alt="banner promocional petlove"
              key={index}
              className={
                index == current
                  ? "carousel-card carousel-card-active"
                  : "carousel-card"
              }
            >
              <img className="card-image" src={carouselImages.image} alt="" />
              <div
                className="carousel-index"
                key={index}
                className={
                  index == current
                    ? "carousel-index carousel-index-active"
                    : "carousel-index"
                }
                onClick={() => setCurrent(index)}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="carousel-arrow-left">
        <button
          className="icon-button-left"
          aria-label="Voltar para o banner anterior"
          onClick={previousImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            viewBox="0 0 24 24"
          >
            <path d="M2 12.375c0-.345.28-.625.625-.625h18.75a.625.625 0 1 1 0 1.25H2.625A.625.625 0 0 1 2 12.375"></path>
            <path d="M11.817 3.183a.625.625 0 0 1 0 .884l-8.308 8.308 8.308 8.308a.625.625 0 1 1-.884.884l-8.75-8.75a.625.625 0 0 1 0-.884l8.75-8.75a.625.625 0 0 1 .884 0"></path>
          </svg>
        </button>
      </div>
      <div className="carousel-arrow-right">
        <button
          className="icon-button-left"
          aria-label="Avançar para o próximo banner"
          onClick={nextImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            viewBox="0 0 24 24"
          >
            <path d="M2 12.375c0-.345.28-.625.625-.625h18.75a.625.625 0 1 1 0 1.25H2.625A.625.625 0 0 1 2 12.375"></path>
            <path d="M12.183 3.183a.625.625 0 0 1 .884 0l8.75 8.75a.625.625 0 0 1 0 .884l-8.75 8.75a.625.625 0 1 1-.884-.884l8.308-8.308-8.308-8.308a.625.625 0 0 1 0-.884"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousel;

/* <img class="banner-image" alt="banner promocional petlove" sizes="(min-width: 1024px) 320px" width="1078px" height="428px" loading="eager" src="https://www.petlove.com.br/static/uploads/banner_image/image/59328/Mobile__12_.png"></img> */
