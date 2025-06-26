import {
  Heading,
  Layout,
  Divider,
  TabbedCard,
} from "@fightclub/libtest/components";
import Code from "./code.mdx";

const DividerExample = () => {
  return (
    <TabbedCard componentName="Divider">
      <TabbedCard.Preview>
        <>
          <Heading as="h5" className="text-l">
            Divider (horizontal)
          </Heading>
          <Layout>
            hello
            <Divider variation="horizontal" />
            world
          </Layout>

          <Heading as="h5" className="text-l">
            Divider labelled (horizontal)
          </Heading>
          <Layout>
            hello
            <Divider variation="horizontal">OR</Divider>
            world
          </Layout>

          <Heading as="h5" className="text-l">
            Divider (vertical)
          </Heading>
          <Layout>
            <div
              style={{ height: "300px" }}
              className="flex flex-start items-start"
            >
              hello
              <Divider variation="vertical" />
              world
            </div>
          </Layout>

          <Heading as="h5" className="text-l">
            Divider labelled (vertical)
          </Heading>
          <Layout>
            <div
              style={{ height: "300px" }}
              className="flex flex-start items-start"
            >
              hello<Divider variation="vertical">OR</Divider>
              world
            </div>
          </Layout>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};
export default DividerExample;
