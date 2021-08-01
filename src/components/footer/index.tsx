import React from "react";
import { Link } from "react-router-dom";
import youtube from "./graphics/icon_youtube.png";
import instagram from "./graphics/icon_instagram.png";
import facebook from "./graphics/icon_facebook.png";
import twitter from "./graphics/icon_twitter.png";
import strings from "./strings";
import { ROUTES } from "../../constants";

const year = new Date().getFullYear();

export default () => (
  <div className="flex justify-center align-end bg-yellow-100">
    <div className="flex justify-around w-4/5">
      <div className="flex flex-col justify-around align-center m-1">
        <div>
          <div>{strings.addressLineOne}</div>
          <div>{strings.addressLineTwo}</div>
        </div>
        <div>{strings.phone}</div>
      </div>
      <div className="flex flex-col justify-around align-center m-1">
        <Link to={ROUTES.UNDER_CONSTRUCTION} className="m-2">
          {strings.contactUs}
        </Link>
        <Link to={ROUTES.UNDER_CONSTRUCTION} className="m-2">
          {strings.careers}
        </Link>
        <Link to={ROUTES.UNDER_CONSTRUCTION} className="m-2">
          {strings.termsAndConditions}
        </Link>
      </div>
      <div className="flex flex-col justify-around align-center m-1">
        <div className="flex flex-between align-center">
          <Link to={ROUTES.UNDER_CONSTRUCTION}>
            <img
              alt={strings.accessibility.youtube}
              src={youtube}
              className="m-2 h-8 w-8"
            />
          </Link>
          <Link to={ROUTES.UNDER_CONSTRUCTION}>
            <img
              alt={strings.accessibility.instagram}
              src={instagram}
              className="m-2 h-8 w-8"
            />
          </Link>
          <Link to={ROUTES.UNDER_CONSTRUCTION}>
            <img
              alt={strings.accessibility.facebook}
              src={facebook}
              className="m-2 h-8 w-8"
            />
          </Link>
          <Link to={ROUTES.UNDER_CONSTRUCTION}>
            <img
              alt={strings.accessibility.twitter}
              src={twitter}
              className="m-2 h-8 w-8"
            />
          </Link>
        </div>
        <div>
          {strings.copyright} {year}
        </div>
      </div>
    </div>
  </div>
);
