import { Heading, TabbedCard } from "@mankindui/core";
import Code from "./code.mdx";

const HeadingExample = () => {
  return (
    <TabbedCard componentName="Heading">
      <TabbedCard.Preview>
        <>
          <Heading as="h1" className="text-6xl">
            H1 heading
          </Heading>
          <Heading as="h2" className="text-4xl">
            H2 heading
          </Heading>
          <Heading as="h3" className="text-3xl">
            H3 heading
          </Heading>
          <Heading as="h4" className="text-2xl">
            H4 heading
          </Heading>
          <Heading as="h5" className="text-xl">
            H5 heading
          </Heading>
          <Heading as="h6" className="text-m">
            H6 heading
          </Heading>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default HeadingExample;
