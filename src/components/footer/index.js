import React from "react";
import { Link } from "react-router-dom";
import youtube from "./graphics/icon_youtube.png";
import instagram from "./graphics/icon_instagram.png";
import facebook from "./graphics/icon_facebook.png";
import twitter from "./graphics/icon_twitter.png";
import strings from "./strings";
import {ROUTES} from "../../constants";

const year = new Date().getFullYear();

export default () =>(
    <div>
      <div>
        <div>
          <div>
            <div>{strings.addressLineOne}</div>
            <div>{strings.addressLineTwo}</div>
          </div>
          <div>{strings.phone}</div>
        </div>
        <div>
          <Link
            to={ROUTES.UNDER_CONSTRUCTION}
          >
            {strings.contactUs}
          </Link>
          <Link
            to={ROUTES.UNDER_CONSTRUCTION}
          >
            {strings.careers}
          </Link>
          <Link
            to={ROUTES.UNDER_CONSTRUCTION}
          >
            {strings.termsAndConditions}
          </Link>
        </div>
        <div>
          <div>
            <Link to={ROUTES.UNDER_CONSTRUCTION}>
              <img
                alt={strings.accessibility.youtube}
                src={youtube}
              />
            </Link>
            <Link to={ROUTES.UNDER_CONSTRUCTION}>
              <img
                alt={strings.accessibility.instagram}
                src={instagram}
              />
            </Link>
            <Link to={ROUTES.UNDER_CONSTRUCTION}>
              <img
                alt={strings.accessibility.facebook}
                src={facebook}
              />
            </Link>
            <Link to={ROUTES.UNDER_CONSTRUCTION}>
              <img
                alt={strings.accessibility.twitter}
                src={twitter}
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
