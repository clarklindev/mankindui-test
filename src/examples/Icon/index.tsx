import { Icon, TabbedCard } from "@mankindui/core/components";
import { HiShoppingCart as ShoppingCartIcon } from "react-icons/hi2";
import Code from "./code.mdx";

const IconExample = () => {
  return (
    <TabbedCard componentName="Icon">
      <TabbedCard.Preview>
        <>
          <Icon size="M">
            <ShoppingCartIcon />
          </Icon>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default IconExample;
