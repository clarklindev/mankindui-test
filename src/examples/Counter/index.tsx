import { useState } from "react";

import { Counter, TabbedCard } from "@mankindui/core";

import Code from "./code.mdx";

const CounterExample = () => {
  const [savedData, setSavedData] = useState(0);

  return (
    <TabbedCard componentName="Counter">
      <TabbedCard.Preview>
        <>
          <Counter
            savedData={savedData}
            onChange={(newValue) => setSavedData(newValue)}
          />
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default CounterExample;
