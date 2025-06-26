import { Navbar, TabbedCard } from "@fightclub/libtest/components";
import Code from "./code.mdx";

const NavbarExample = () => {
  return (
    <TabbedCard componentName="Navbar">
      <TabbedCard.Preview>
        <>
          <Navbar />
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default NavbarExample;
