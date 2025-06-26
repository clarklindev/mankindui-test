import { Spinner, TabbedCard } from "@fightclub/libtest/components";
import Code from "./code.mdx";

const SpinnerExample = () => {
  return (
    <TabbedCard componentName="Spinner">
      <TabbedCard.Preview>
        <>
          <Spinner size="35" color="red" />
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default SpinnerExample;
