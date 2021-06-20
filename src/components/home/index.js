import React from "react";
import strings from "./strings";
import Carousel from "./Carousel";

export default () => (
    <div>
      <div >
        <div >{strings.warranty}</div>
      </div>
      <div >
        <Carousel />
      </div>
      <div >{strings.descriptionTitle}</div>
      <div >{strings.description}</div>
    </div>
  );