import { Avatar, Layout, TabbedCard } from "@fightclub/libtest";
import avatar1 from "../../assets/avatar1.png";

import Code from "./code.mdx";

const AvatarExample = () => {
  return (
    <TabbedCard componentName="Avatar">
      <TabbedCard.Preview>
        <>
          <Layout>
            <Avatar size={"S"} imageUrl={avatar1} />
          </Layout>
          <Layout>
            <Avatar size={"M"} imageUrl={avatar1} />
          </Layout>
          <Layout>
            <Avatar size={"L"} imageUrl={avatar1} />
          </Layout>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default AvatarExample;
