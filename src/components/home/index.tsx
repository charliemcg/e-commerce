import React from "react";
import strings from "./strings";
import Carousel from "./Carousel";

export default () => (
    <div>
      <div >
        <div className="text-5xl text-white bg-red-100">{strings.warranty}</div>
      </div>
      <div >
        <Carousel />
      </div>
      <div >{strings.descriptionTitle}</div>
      <div >{strings.description}</div>
    </div>
  );