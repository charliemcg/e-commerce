import React, { useState } from "react";
import strap from "../../strap.png";

export default () => {
  const [color, setColor] = useState("red");
  const [selectedOption, setSelectedOption] = useState("Texture");

  const getButton = (color: string) => (
    <div className="bg-red h-16 w-16">
      <div
        className={`h-10 w-10 bg-${color} rounded-full border-b border-black m-2`}
        onClick={() => setColor(color)}
      />
    </div>
  );

  const getColor = (option: string, display: string) => (
    <div
      className="h-26 w-20"
      onClick={() => setColor(option)}
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

  const getColorPalette = () => (
    <div>
      <div
        className="flex flex-row"
        style={{ marginTop: 10, justifyContent: "center" }}
      >
        {getColor("red", "Cranberry Red")}
        {getColor("blue-500", "Ocean Blue")}
        {getColor("blue-800", "Sapphire Blue")}
      </div>
      <div
        className="flex flex-row"
        style={{ marginTop: 10, justifyContent: "center" }}
      >
        {getColor("green", "Clover Green")}
        {getColor("yellow-300", "Sunflower Yellow")}
        {getColor("white", "Snow White")}
      </div>
      <div
        className="flex flex-row"
        style={{ marginTop: 10, justifyContent: "center" }}
      >
        {getColor("pink", "Flamingo Pink")}
        {getColor("black", "Charcoal Black")}
        {getColor("yellow-700", "Whiskey Brown")}
      </div>
      <div
        className="flex flex-row"
        style={{ marginTop: 10, justifyContent: "center" }}
      >
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
            <select>
              <option value="Smooth">Smooth</option>
              <option selected value="Pebbled">
                Pebbled
              </option>
              <option value="Alligator">Alligator</option>
              <option value="Lizard">Lizard</option>
            </select>
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
            <div>Lug width</div>
            <select>
              <option value="18">18mm</option>
              <option value="20">20mm</option>
              <option selected value="22">
                22mm
              </option>
              <option value="24">24mm</option>
              <option value="26">26mm</option>
            </select>
            <div>Strap length</div>
            <select>
              <option value="small">Small</option>
              <option selected value="medium">
                Medium
              </option>
              <option value="large">Large</option>
            </select>
          </div>
        );
      case "Monogram":
        return (
          <div className="text-white font-bold">
            <div style={{ textAlign: "center", padding: 10, fontSize: 24 }}>
              Monogram
            </div>
            <div>No monogram</div>
            <div className="flex flex-row justify-center">
              <div>Text</div>
              <input type="text" />
            </div>
            <div className="flex flex-row justify-center">
              <div>Colour</div>
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
            <div className="text-white">Colour</div>
            {getButton("gray-200")}
            {getButton("yellow-300")}
            <div>Type</div>
            <select>
              <option selected value="buckle">
                Buckle
              </option>
              <option value="clasp">Clasp</option>
            </select>
          </div>
        );
    }
    return <></>;
  };

  return (
    <div>
      <div className="grid grid-cols-12" style={{ height: 520 }}>
        <div className="grid col-span-8 justify-center">
          <img src={strap} className={`object-scale-down h-80 bg-${color}`} />
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
