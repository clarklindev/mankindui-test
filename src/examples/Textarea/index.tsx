import { Textarea, TabbedCard } from "@fightclub/libtest/components";
import Code from "./code.mdx";

const TextareaExample = () => {
  return (
    <TabbedCard componentName="Text">
      <TabbedCard.Preview>
        <>
          <Textarea>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Textarea>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default TextareaExample;
