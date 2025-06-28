import { useState } from "react";

import { ToggleSwitch, TabbedCard } from "@mankindui/core";
import Code from "./code.mdx";

const ToggleSwitchExample = () => {
  const [savedData, setSavedData] = useState(false);

  // ----------------------------------------------------------------

  return (
    <TabbedCard componentName="Toggle Button">
      <TabbedCard.Preview>
        <>
          <ToggleSwitch
            savedData={savedData}
            onChange={(event) => {
              console.log("event.target.checked: ", event.target.checked);
              setSavedData(event.target.checked);
            }}
          />
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default ToggleSwitchExample;
