import { useState } from "react";

import { RadioButton, TabbedCard } from "@mankindui/core/components";
import Code from "./code.mdx";

const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <TabbedCard componentName="Radio Button">
      <TabbedCard.Preview>
        <>
          <RadioButton
            checked={savedData}
            name="radio"
            label="label"
            onChange={(event) => {
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

export default RadioButtonExample;
