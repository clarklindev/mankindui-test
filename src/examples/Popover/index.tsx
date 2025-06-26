import { Popover, TabbedCard } from "@mankindui/core/components";

import Code from "./code.mdx";

const PopoverExample = () => {
  return (
    <TabbedCard componentName="Icon">
      <TabbedCard.Preview>
        <>
          <Popover>
            <Popover.Trigger>
              <button>Click to Toggle Popover</button>
            </Popover.Trigger>
            <Popover.Content>
              <div>
                <p>This is the content of the popover!</p>
              </div>
            </Popover.Content>
          </Popover>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default PopoverExample;
