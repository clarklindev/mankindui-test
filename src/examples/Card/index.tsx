import { Card } from "@mankindui/core";
import { TabbedCard } from "@mankindui/core";
import Code from "./code.mdx";

const CardExample = () => {
  return (
    <TabbedCard componentName="Card">
      <TabbedCard.Preview>
        <>
          <Card>
            <Card.Title>this is the title</Card.Title>
            <Card.Content>this is content</Card.Content>
          </Card>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default CardExample;
