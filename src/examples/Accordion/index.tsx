import { Icon, Accordion, TabbedCard } from "@mankindui/core";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
} from "@mankindui/core/icons";

import Code from "./code.mdx";

const data = [
  {
    title: "1. Lorem ipsum dolor sit amet",
    body: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "2. Lorem ipsum dolor sit amet",
    body: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "3. Lorem ipsum dolor sit amet",
    body: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

type AccordionDataType = {
  title: string;
  body: React.ReactElement | string;
};

const AccordionExample = () => {
  const iconMap = {
    chevron: { open: <ChevronUpIcon />, closed: <ChevronDownIcon /> },
    plusminus: { open: <MinusIcon />, closed: <PlusIcon /> },
    hidden: {},
  };

  return (
    <TabbedCard componentName="Accordion">
      <TabbedCard.Preview>
        <>
          <Accordion multiOpen={false}>
            {data.map(({ title, body }: AccordionDataType, index) => {
              return (
                <Accordion.Section key={index}>
                  <Accordion.SectionHeader
                    render={(indexes) => (
                      <Accordion.SectionHeaderTitle index={index}>
                        {title}
                        <Icon>
                          {indexes.includes(index)
                            ? iconMap["chevron"].open
                            : iconMap["chevron"].closed}
                        </Icon>
                      </Accordion.SectionHeaderTitle>
                    )}
                  />
                  <Accordion.SectionPanel index={index}>
                    <Accordion.SectionPanelContent>
                      {body}
                    </Accordion.SectionPanelContent>
                  </Accordion.SectionPanel>
                </Accordion.Section>
              );
            })}
          </Accordion>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default AccordionExample;
