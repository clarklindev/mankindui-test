import { useState } from "react";

import { Select, TabbedCard } from "@mankindui/core/components";
import Code from "./code.mdx";

const SelectExample = () => {
  const [savedData, setSavedData] = useState<string | null>();

  const data = [
    { value: "option0", text: "Select an option" },
    { value: "option1", text: "Option 1" },
    { value: "option2", text: "Option 2" },
    { value: "option3", text: "Option 3" },
  ];

  return (
    <TabbedCard componentName="Select">
      <TabbedCard.Preview>
        <>
          <Select>
            <Select.SelectElement
              savedData={savedData}
              onChange={(event) => setSavedData(event.target.value)}
            >
              {data.map((each, index) => (
                <Select.SelectOption value={each.value} key={index}>
                  {each.text}
                </Select.SelectOption>
              ))}
            </Select.SelectElement>
            <Select.SelectIcon></Select.SelectIcon>
          </Select>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default SelectExample;
