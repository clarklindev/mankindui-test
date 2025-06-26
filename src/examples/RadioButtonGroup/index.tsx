// //RadioButtonGroup
import { useState } from "react";

import {
  Layout,
  Heading,
  RadioButton,
  Label,
  TabbedCard,
} from "@mankindui/core/components";
import Code from "./code.mdx";

const RadioButtonGroupExample = () => {
  const options = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
    { label: "D", value: "d" },
  ];

  const [savedDataA, updateSavedDataA] = useState(
    Array(options.length).fill(false)
  );
  const [savedDataB, updateSavedDataB] = useState(
    Array(options.length).fill(false)
  );

  const onChange = (
    savedData: Array<boolean>,
    updateSavedData: (newData: Array<boolean>) => void,
    index: number
  ) => {
    const newValues = [...savedData].fill(false);
    newValues[index] = true;
    updateSavedData(newValues);
  };

  return (
    <TabbedCard componentName="Radio Button Group">
      <TabbedCard.Preview>
        <>
          <Layout>
            <Heading as="h5">RadioButton Group (horizontal)</Heading>

            <div className="flex flex-row space-x-5">
              {options.map((each, index) => {
                return (
                  <Label
                    key={"RadioButtonGroupA" + index}
                    label={each.label}
                    labelDirection="bottom"
                  >
                    <RadioButton
                      checked={savedDataA[index]}
                      name="RadioA"
                      size="XL"
                      onChange={() =>
                        onChange(savedDataA, updateSavedDataA, index)
                      }
                    />
                  </Label>
                );
              })}
            </div>
          </Layout>
          <br />

          <Layout>
            <Heading as="h5">RadioButton Group (vertical)</Heading>

            <div className="flex flex-col space-y-5">
              {options.map((each, index) => {
                return (
                  <Label
                    key={"RadioButtonGroupB" + index}
                    label={each.label}
                    labelDirection="right"
                  >
                    <RadioButton
                      checked={savedDataB[index]}
                      name="RadioB"
                      size="XL"
                      onChange={() =>
                        onChange(savedDataB, updateSavedDataB, index)
                      }
                    />
                  </Label>
                );
              })}
            </div>
          </Layout>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default RadioButtonGroupExample;
