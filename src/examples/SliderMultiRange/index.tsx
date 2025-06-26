import { useState } from "react";
import { SliderMultiRange } from "@mankindui/core";

const SliderMultiRangeExample = () => {
  const [sliderValues, setSliderValues] = useState([0, 20, 40]); //holds positions of sliders

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "50px",
        }}
      >
        <SliderMultiRange
          sliderValues={sliderValues}
          colors={["red", "yellow", "green"]}
          orientation="horizontal"
          onChange={setSliderValues}
        />
      </div>
      <br />
      <div
        style={{
          width: "100%",
          height: "350px",
        }}
      >
        <SliderMultiRange
          sliderValues={sliderValues}
          colors={["red", "yellow", "green"]}
          orientation="vertical"
          onChange={setSliderValues}
        />
      </div>
    </>
  );
};

export default SliderMultiRangeExample;
