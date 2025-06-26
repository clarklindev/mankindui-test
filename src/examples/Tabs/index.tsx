import { Tabs, TabbedCard } from "@mankindui/core/components";
import Code from "./code.mdx";

const TabsExample = () => {
  return (
    <TabbedCard componentName="Tabs">
      <TabbedCard.Preview>
        <>
          <Tabs>
            <Tabs.TriggerGroup>
              <Tabs.Trigger data-tab="0">Tab1</Tabs.Trigger>
              <Tabs.Trigger data-tab="1">Tab2</Tabs.Trigger>
            </Tabs.TriggerGroup>

            <Tabs.ContentGroup>
              <Tabs.Content data-tab="0"></Tabs.Content>
              <Tabs.Content data-tab="1"></Tabs.Content>
            </Tabs.ContentGroup>
          </Tabs>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default TabsExample;
