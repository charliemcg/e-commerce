import React, { useState } from "react";
import strap from "../../strap.png";

export default () => {
  const [color, setColor] = useState("red-500");
  const [selectedOption, setSelectedOption] = useState("Texture");

  const getButton = (color: string) => (
    <div
      className={`h-10 w-10 bg-${color} rounded-full border-b border-black m-2`}
      onClick={() => setColor(color)}
    />
  );

  const getConfigurationOption = () => {
    switch (selectedOption) {
      case "Texture":
        return (
          <div>
            <div>Texture</div>
            <div>Should have thumbnails of the textures to select</div>
          </div>
        );
      case "Colour":
        return (
          <div>
            <div>Colour</div>
            <div>Show the colour palette</div>
          </div>
        );
      case "Thread":
        return (
          <div>
            <div>Thread</div>
            <div>Show the colour palette</div>
          </div>
        );
      case "Edge Paint":
        return (
          <div>
            <div>Edge Paint</div>
            <div>Show the colour palette</div>
          </div>
        );
      case "Dimensions":
        return (
          <div>
            <div>Dimensions</div>
            <div>Show drop downs to select lug width and strap length</div>
          </div>
        );
      case "Monogram":
        return (
          <div>
            <div>Monogram</div>
            <div>Show text input with validation. Show colour palette.</div>
          </div>
        );
      case "Hardware":
        return (
          <div>
            <div>Hardware</div>
            <div>
              Show a clickable image of gold hardware and silver hardware
            </div>
          </div>
        );
    }
    return <></>;
  };

  return (
    <div>
      <div className="flex justify-center">
        <img src={strap} className={`object-scale-down h-80 bg-${color}`} />
      </div>
      <div className="flex flex-row justify-center">
        <div>Texture</div>
        <select>
          <option value="Smooth">Smooth</option>
          <option selected value="Pebbled">
            Pebbled
          </option>
          <option value="Alligator">Alligator</option>
          <option value="Lizard">Lizard</option>
        </select>
      </div>
      <div className="flex flex-row justify-center">
        <div>Colour</div>
        {getButton("red-500")}
        {getButton("blue-500")}
        {getButton("blue-800")}
        {getButton("green-500")}
        {getButton("yellow-300")}
        {getButton("white")}
        {getButton("pink-200")}
        {getButton("pink-500")}
        {getButton("black")}
        {getButton("yellow-700")}
        {getButton("yellow-900")}
      </div>
      <div className="flex flex-row justify-center">
        <div>Thread</div>
        {getButton("red-500")}
        {getButton("blue-500")}
        {getButton("blue-800")}
        {getButton("green-500")}
        {getButton("yellow-300")}
        {getButton("white")}
        {getButton("pink-200")}
        {getButton("pink-500")}
        {getButton("black")}
        {getButton("yellow-700")}
        {getButton("yellow-900")}
      </div>
      <div className="flex flex-row justify-center">
        <div>Edge paint</div>
        {getButton("red-500")}
        {getButton("blue-500")}
        {getButton("blue-800")}
        {getButton("green-500")}
        {getButton("yellow-300")}
        {getButton("white")}
        {getButton("pink-200")}
        {getButton("pink-500")}
        {getButton("black")}
        {getButton("yellow-700")}
        {getButton("yellow-900")}
      </div>
      <div className="flex flex-row justify-center">
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
      </div>
      <div className="flex flex-row justify-center">
        <div>Monogram</div>
        <input type="text" />
      </div>
      <div className="flex flex-row justify-center">
        <div>Monogram Colour</div>
        {getButton("red-500")}
        {getButton("blue-500")}
        {getButton("blue-800")}
        {getButton("green-500")}
        {getButton("yellow-300")}
        {getButton("white")}
        {getButton("pink-200")}
        {getButton("pink-500")}
        {getButton("black")}
        {getButton("yellow-700")}
        {getButton("yellow-900")}
      </div>
      <div className="flex flex-row justify-center">
        <div>Strap length</div>
        <select>
          <option value="small">Small</option>
          <option selected value="medium">
            Medium
          </option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className="flex flex-row justify-center">
        <div>Hardware Colour</div>
        {getButton("gray-200")}
        {getButton("yellow-300")}
      </div>
      <div className="grid grid-cols-12">
        <div className="grid col-span-8 justify-center">
          <img src={strap} className={`object-scale-down h-80 bg-${color}`} />
        </div>
        <div className="grid col-span-4">{getConfigurationOption()}</div>
      </div>
      <div className="flex flex-row">
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
            className="flex-auto justify-center items-center bg-red-500 text-center"
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
