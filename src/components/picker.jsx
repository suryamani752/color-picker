import React from "react";
import { BlockPicker } from "react-color";
import { useState } from "react";

const Picker = () => {
  //creating state to store our color and also set color using onChange event for block picker
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");

  return (
    <div className="color-picker">
      <div className="blockpicker">
        <h6>Color Picker</h6>
        {/* Div to display the color  */}
        <div
          style={{
            backgroundColor: `${blockPickerColor}`,
            width: 250,
            height: 150,
            border: "2px solid white",
          }}
        ></div>
        {/* Block Picker from react-color and handling color on onChange event */}
        <BlockPicker
          color={blockPickerColor}
          onChange={(color) => {
            setBlockPickerColor(color.hex);
          }}
        />
      </div>
    </div>
  );
};

export default Picker;
