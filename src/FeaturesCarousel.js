import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Features from "./Features";
import PromoCard from "./PromoCard";

const FeaturesCarousel = ({ features }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

    const updateButtons = () => {
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  };

  
  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
  }, [emblaApi,updateButtons]);



  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {features.map((item) => (
            <div key={item.id} className="embla__slide">
              <Features item={item} />
            </div>
          ))}
        </div>

        <div className="arrowButtonDiv">
          <button
            className={`arrow ${prevDisabled ? "disabled" : "active"}`}
            disabled={prevDisabled}
            onClick={scrollPrev}
          >
            {"<"}
          </button>
          <button
            className={`arrow ${nextDisabled ? "disabled" : "active"}`}
            disabled={nextDisabled}
            onClick={scrollNext}
          >
            {">"}
          </button>
        </div>
      </div>
      <PromoCard />
    </>
  );
};

export default FeaturesCarousel;
