import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import finance from "./graphics/jumbotron_finance.png";
import { ROUTES } from "../../constants";
import strings from "./strings";

const imageDetails = [
  {
    src: finance,
    alt: strings.accessibility.finance,
    route: ROUTES.UNDER_CONSTRUCTION,
  },
];

const images = imageDetails.map((details, i) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => (window.location.href = details.route)}
    >
      <img alt={details.alt} src={details.src} />
    </div>
  );
});

export default () => (
  <div>
    <Carousel
      autoPlay
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
    >
      {images}
    </Carousel>
  </div>
);
