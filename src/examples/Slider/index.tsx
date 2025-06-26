import { useState } from "react";

import { Slider, TabbedCard } from "@fightclub/libtest/components";
import Code from "./code.mdx";

const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);
  const [savedData2, setSavedData2] = useState(0);

  return (
    <TabbedCard componentName="Slider">
      <TabbedCard.Preview>
        <>
          <div
            style={{
              width: "100%",
              height: "50px",
            }}
          >
            <Slider
              value={savedData}
              orientation="horizontal"
              onChange={setSavedData}
            />
          </div>
          <br />
          <div
            style={{
              width: "100%",
              height: "350px",
            }}
          >
            <Slider
              value={savedData2}
              orientation="vertical"
              onChange={setSavedData2}
            />
          </div>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default SliderExample;
