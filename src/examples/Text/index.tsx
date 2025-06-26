import { Text, TabbedCard } from "@mankindui/core/components";
import Code from "./code.mdx";

const TextExample = () => {
  return (
    <TabbedCard componentName="Text">
      <TabbedCard.Preview>
        <>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Text>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default TextExample;
