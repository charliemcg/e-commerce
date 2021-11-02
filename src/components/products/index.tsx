import React, { useState, useRef, useEffect, RefObject } from "react";
import strap from "../../strap.png";
import stitching_red from "../../stitching_red.png";
import stitching_light_blue from "../../stitching_light_blue.png";
import stitching_dark_blue from "../../stitching_dark_blue.png";
import stitching_green from "../../stitching_green.png";
import stitching_yellow from "../../stitching_yellow.png";
import stitching_black from "../../stitching_black.png";
import stitching_pink from "../../stitching_pink.png";
import stitching_white from "../../stitching_white.png";
import stitching_light_brown from "../../stitching_light_brown.png";
import stitching_dark_brown from "../../stitching_dark_brown.png";
import edge_red from "../../edge_red.png";
import edge_light_blue from "../../edge_light_blue.png";
import edge_dark_blue from "../../edge_dark_blue.png";
import edge_green from "../../edge_green.png";
import edge_yellow from "../../edge_yellow.png";
import edge_black from "../../edge_black.png";
import edge_pink from "../../edge_pink.png";
import edge_white from "../../edge_white.png";
import edge_light_brown from "../../edge_light_brown.png";
import edge_dark_brown from "../../edge_dark_brown.png";
import blob from "../../blob.png";
import gator_red from "../../gator_red.png";
import gator_light_blue from "../../gator_light_blue.png";
import gator_dark_blue from "../../gator_dark_blue.png";
import gator_green from "../../gator_green.png";
import gator_yellow from "../../gator_yellow.png";
import gator_white from "../../gator_white.png";
import gator_pink from "../../gator_pink.png";
import gator_black from "../../gator_black.png";
import gator_light_brown from "../../gator_light_brown.png";
import gator_dark_brown from "../../gator_dark_brown.png";
import texture_alligator from "../../texture_alligator.png";
import smooth_red from "../../smooth_red.png";
import smooth_light_blue from "../../smooth_light_blue.png";
import smooth_dark_blue from "../../smooth_dark_blue.png";
import smooth_green from "../../smooth_green.png";
import smooth_yellow from "../../smooth_yellow.png";
import smooth_white from "../../smooth_white.png";
import smooth_pink from "../../smooth_pink.png";
import smooth_black from "../../smooth_black.png";
import smooth_light_brown from "../../smooth_light_brown.png";
import smooth_dark_brown from "../../smooth_dark_brown.png";
import texture_smooth from "../../texture_smooth.png";
import pebbled_red from "../../pebbled_red.png";
import pebbled_light_blue from "../../pebbled_light_blue.png";
import pebbled_dark_blue from "../../pebbled_dark_blue.png";
import pebbled_green from "../../pebbled_green.png";
import pebbled_yellow from "../../pebbled_yellow.png";
import pebbled_white from "../../pebbled_white.png";
import pebbled_pink from "../../pebbled_pink.png";
import pebbled_black from "../../pebbled_black.png";
import pebbled_light_brown from "../../pebbled_light_brown.png";
import pebbled_dark_brown from "../../pebbled_dark_brown.png";
import texture_pebbled from "../../texture_pebbled.png";

export default () => {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState("Texture");
  const [color, setColor] = useState("black");
  const [texture, setTexture] = useState("Pebbled");
  const [hardwareType, setHardwareType] = useState("buckle");
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [thread, setThread] = useState("white");
  const [edge, setEdge] = useState("black");

  const getColor = (option: string, display: string) => (
    <div
      className="h-26 w-20"
      onClick={() => {
        if (selectedOption === "Thread") {
          setThread(option);
        } else if (selectedOption === "Edge Paint") {
          setEdge(option);
        } else {
          setColor(option);
        }
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        className={`h-14 w-14 bg-${option} rounded-full`}
        style={{ borderWidth: option === color ? 4 : 0 }}
      />
      <div
        style={{
          fontWeight: "normal",
          textAlign: "center",
          lineHeight: 1,
          fontSize: 12,
        }}
      >
        {display}
      </div>
    </div>
  );

  const getTexture = (option: string) => (
    <div
      className="h-40 w-40"
      onClick={() => setTexture(option)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={
          option == "Smooth"
            ? texture_smooth
            : option === "Pebbled"
            ? texture_pebbled
            : texture_alligator
        }
        className="h-28 w-28 bg-black rounded-full"
        style={{ borderWidth: option === texture ? 4 : 0 }}
      />
      <div
        style={{
          fontWeight: "normal",
          textAlign: "center",
          lineHeight: 1,
          fontSize: 12,
        }}
      >
        {option}
      </div>
    </div>
  );

  const getColorPalette = () => (
    <div>
      <div
        className="flex flex-row"
        style={{ marginTop: 10, justifyContent: "center" }}
      >
        {getColor("red", "Cranberry Red")}
        {getColor("blue-500", "Ocean Blue")}
        {getColor("blue-800", "Sapphire Blue")}
        {getColor("green", "Clover Green")}
      </div>
      <div
        className="flex flex-row"
        style={{ marginTop: 10, justifyContent: "center" }}
      >
        {getColor("yellow-300", "Sunflower Yellow")}
        {getColor("white", "Snow White")}
        {getColor("pink", "Flamingo Pink")}
        {getColor("black", "Charcoal Black")}
      </div>
      <div
        className="flex flex-row"
        style={{ marginTop: 10, justifyContent: "center" }}
      >
        {getColor("yellow-700", "Whiskey Brown")}
        {getColor("yellow-900", "Chocolate Brown")}
      </div>
    </div>
  );

  const getConfigurationOption = () => {
    switch (selectedOption) {
      case "Texture":
        return (
          <div className="text-white font-bold">
            <div style={{ textAlign: "center", padding: 10, fontSize: 24 }}>
              Texture
            </div>
            <div>
              <div
                className="flex flex-row"
                style={{ marginTop: 10, justifyContent: "center" }}
              >
                {getTexture("Smooth")}
                {getTexture("Pebbled")}
              </div>
              <div
                className="flex flex-row"
                style={{ marginTop: 10, justifyContent: "center" }}
              >
                {getTexture("Alligator")}
                {getTexture("Lizard")}
              </div>
            </div>
          </div>
        );
      case "Colour":
        return (
          <div className="text-white font-bold">
            <div style={{ textAlign: "center", padding: 10, fontSize: 24 }}>
              Colour
            </div>
            {getColorPalette()}
          </div>
        );
      case "Thread":
        return (
          <div className="text-white font-bold">
            <div style={{ textAlign: "center", padding: 10, fontSize: 24 }}>
              Thread
            </div>
            {getColorPalette()}
          </div>
        );
      case "Edge Paint":
        return (
          <div className="text-white font-bold">
            <div style={{ textAlign: "center", padding: 10, fontSize: 24 }}>
              Edge paint
            </div>
            {getColorPalette()}
          </div>
        );
      case "Dimensions":
        return (
          <div className="text-white font-bold">
            <div style={{ textAlign: "center", padding: 10, fontSize: 24 }}>
              Dimensions
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                height: 50,
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Lug width
              </div>
              <div style={{ flex: 1 }}>
                <select style={{ width: 140, color: "black" }}>
                  <option value="18">18mm</option>
                  <option value="20">20mm</option>
                  <option selected value="22">
                    22mm
                  </option>
                  <option value="24">24mm</option>
                  <option value="26">26mm</option>
                </select>
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                height: 50,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Strap length
              </div>
              <div style={{ flex: 1 }}>
                <select style={{ width: 140, color: "black" }}>
                  <option value="small">Small</option>
                  <option selected value="medium">
                    Medium
                  </option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
            <div
              style={{
                height: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff0d4",
                  height: 60,
                  borderColor: "#ff9100",
                  borderWidth: 2,
                  borderRadius: 6,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                  opacity: 0.9,
                }}
              >
                <div
                  style={{
                    color: "#ff9100",
                    fontWeight: "normal",
                  }}
                >
                  Changes not shown in configurator
                </div>
              </div>
            </div>
          </div>
        );
      case "Monogram":
        return (
          <div className="text-white font-bold">
            <div style={{ textAlign: "center", padding: 10, fontSize: 24 }}>
              Monogram
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                height: 50,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flex: 2,
                  textAlign: "center",
                }}
              >
                No monogram
              </div>
              <div style={{ flex: 1 }}>
                <input type="checkbox" />
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                height: 50,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Text
              </div>
              <div style={{ flex: 1 }}>
                <input type="text" />
              </div>
            </div>
            <div className="flex flex-row justify-center">
              {getColorPalette()}
            </div>
          </div>
        );
      case "Hardware":
        return (
          <div className="text-white font-bold">
            <div style={{ textAlign: "center", padding: 10, fontSize: 24 }}>
              Hardware
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                height: 50,
                alignItems: "center",
                margin: 20,
              }}
            >
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Colour
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
                {getColor("gray", "Chrome")}
                {getColor("yellow-300", "Gold")}
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                height: 50,
                alignItems: "center",
                margin: 20,
              }}
            >
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Type
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
                <select
                  value={hardwareType}
                  onChange={(data) => setHardwareType(data.target.value)}
                  style={{ width: 150, color: "black" }}
                >
                  <option value="buckle">Buckle</option>
                  <option value="clasp">Clasp</option>
                </select>
              </div>
            </div>
            {hardwareType === "clasp" && (
              <div
                style={{
                  height: 250,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#fff0d4",
                    height: 60,
                    borderColor: "#ff9100",
                    borderWidth: 2,
                    borderRadius: 6,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                    opacity: 0.9,
                  }}
                >
                  <div
                    style={{
                      color: "#ff9100",
                      fontWeight: "normal",
                    }}
                  >
                    Clasp not shown in configurator
                  </div>
                </div>
              </div>
            )}
          </div>
        );
    }
    return <></>;
  };

  useEffect(() => {
    console.log(imgContainerRef);
    if (imgContainerRef.current?.offsetWidth) setOffsetWidth(100);
  }, [imgContainerRef.current]);

  const getAlligator = () => {
    switch (color) {
      case "red":
        return gator_red;
      case "blue-500":
        return gator_light_blue;
      case "blue-800":
        return gator_dark_blue;
      case "green":
        return gator_green;
      case "yellow-300":
        return gator_yellow;
      case "white":
        return gator_white;
      case "pink":
        return gator_pink;
      case "black":
        return gator_black;
      case "yellow-700":
        return gator_light_brown;
      case "yellow-900":
        return gator_dark_brown;
    }
  };

  const getSmooth = () => {
    switch (color) {
      case "red":
        return smooth_red;
      case "blue-500":
        return smooth_light_blue;
      case "blue-800":
        return smooth_dark_blue;
      case "green":
        return smooth_green;
      case "yellow-300":
        return smooth_yellow;
      case "white":
        return smooth_white;
      case "pink":
        return smooth_pink;
      case "black":
        return smooth_black;
      case "yellow-700":
        return smooth_light_brown;
      case "yellow-900":
        return smooth_dark_brown;
    }
  };

  const getPebbled = () => {
    switch (color) {
      case "red":
        return pebbled_red;
      case "blue-500":
        return pebbled_light_blue;
      case "blue-800":
        return pebbled_dark_blue;
      case "green":
        return pebbled_green;
      case "yellow-300":
        return pebbled_yellow;
      case "white":
        return pebbled_white;
      case "pink":
        return pebbled_pink;
      case "black":
        return pebbled_black;
      case "yellow-700":
        return pebbled_light_brown;
      case "yellow-900":
        return pebbled_dark_brown;
    }
  };

  const getColorImg = () => {
    switch (texture) {
      case "Alligator":
        return getAlligator();
      case "Smooth":
        return getSmooth();
      case "Pebbled":
        return getPebbled();
    }
  };

  const getThreadImg = () => {
    switch (thread) {
      case "red":
        return stitching_red;
      case "blue-500":
        return stitching_light_blue;
      case "blue-800":
        return stitching_dark_blue;
      case "green":
        return stitching_green;
      case "yellow-300":
        return stitching_yellow;
      case "white":
        return stitching_white;
      case "pink":
        return stitching_pink;
      case "black":
        return stitching_black;
      case "yellow-700":
        return stitching_light_brown;
      case "yellow-900":
        return stitching_dark_brown;
    }
  };

  const getEdgeImg = () => {
    switch (edge) {
      case "red":
        return edge_red;
      case "blue-500":
        return edge_light_blue;
      case "blue-800":
        return edge_dark_blue;
      case "green":
        return edge_green;
      case "yellow-300":
        return edge_yellow;
      case "white":
        return edge_white;
      case "pink":
        return edge_pink;
      case "black":
        return edge_black;
      case "yellow-700":
        return edge_light_brown;
      case "yellow-900":
        return edge_dark_brown;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12" style={{ height: 520 }}>
        <div ref={imgContainerRef} className="grid col-span-8 justify-center">
          <img src={getColorImg()} className={`object-scale-down`} />
        </div>
        <div
          className="grid col-span-8 justify-center"
          style={{
            position: "absolute",
            width: imgContainerRef.current?.offsetWidth,
            zIndex: -1,
            opacity: 0.7,
          }}
        >
          <img src={blob} className={`object-scale-down`} />
        </div>
        <div
          className="grid col-span-8 justify-center"
          style={{
            position: "absolute",
            width: imgContainerRef.current?.offsetWidth,
          }}
        >
          <img src={getThreadImg()} className={`object-scale-down`} />
        </div>
        <div
          className="grid col-span-8 justify-center"
          style={{
            position: "absolute",
            width: imgContainerRef.current?.offsetWidth,
          }}
        >
          <img src={getEdgeImg()} className={`object-scale-down`} />
        </div>
        <div
          className="grid col-span-4 bg-purple m-5 rounded-3xl"
          style={{ backgroundColor: "#4b0082" }}
        >
          {getConfigurationOption()}
        </div>
      </div>
      <div
        className="flex flex-row bg-purple m-5 rounded-3xl h-11"
        style={{ backgroundColor: "#4b0082" }}
      >
        {[
          "Texture",
          "Colour",
          "Thread",
          "Edge Paint",
          "Dimensions",
          "Monogram",
          "Hardware",
        ].map((option) => (
          <div
            className="flex flex-grow justify-center items-center"
            onClick={() => setSelectedOption(option)}
          >
            <div
              className="text-center text-white font-bold"
              style={{
                fontSize: option === selectedOption ? 20 : 16,
                opacity: option === selectedOption ? 1 : 0.7,
              }}
            >
              {option}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
