import { ProgressLoader, TabbedCard } from "@fightclub/libtest/components";
import Code from "./code.mdx";

const ProgressLoaderExample = () => {
  return (
    <TabbedCard componentName="Progress Loader">
      <TabbedCard.Preview>
        <>
          <div className="flex flex-col gap-10">
            <ProgressLoader progress={25} size={35} color="red" />

            <ProgressLoader progress={50} size={35} color="red" />

            <ProgressLoader progress={75} size={35} color="red" />

            <ProgressLoader progress={100} size={35} color="red" />
          </div>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default ProgressLoaderExample;
