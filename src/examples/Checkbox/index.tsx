import { useState } from "react";

import {
  Checkbox,
  Label,
  Layout,
  TabbedCard,
} from "@fightclub/libtest/components";

import Code from "./code.mdx";

const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <TabbedCard componentName="Checkbox">
      <TabbedCard.Preview>
        <>
          <Layout>
            <Label label="label" labelDirection="right" gap="2">
              <Checkbox
                size="XL"
                checked={savedData}
                name="checkbox"
                onChange={(event) => {
                  setSavedData(event.target.checked);
                }}
              />
            </Label>
          </Layout>
          <Layout>
            <Label label="label" labelDirection="right" gap="2">
              <Checkbox
                size="L"
                checked={savedData}
                name="checkbox"
                onChange={(event) => {
                  setSavedData(event.target.checked);
                }}
              />
            </Label>
          </Layout>
          <Layout>
            <Label label="label" labelDirection="right" gap="2">
              <Checkbox
                size="M"
                checked={savedData}
                name="checkbox"
                onChange={(event) => {
                  setSavedData(event.target.checked);
                }}
              />
            </Label>
          </Layout>

          <Layout>
            <Label label="label" labelDirection="right" gap="2">
              <Checkbox
                size="M"
                border={false}
                checked={savedData}
                name="checkbox"
                onChange={(event) => {
                  setSavedData(event.target.checked);
                }}
              />
            </Label>
          </Layout>

          <Layout>
            <Checkbox
              size="M"
              border={false}
              checked={savedData}
              name="checkbox"
              onChange={(event) => {
                setSavedData(event.target.checked);
              }}
            />
          </Layout>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default CheckboxExample;
