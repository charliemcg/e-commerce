import React, { useState } from "react";
import strap from "../../strap.png";

export default () => {
  const [selectedOption, setSelectedOption] = useState("Texture");
  const [color, setColor] = useState("red");
  const [texture, setTexture] = useState("Pebbled");
  const [hardwareType, setHardwareType] = useState("buckle");

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
      <div
        className={`h-28 w-28 bg-black rounded-full`}
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
