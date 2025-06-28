import { Button, Icon, Label, Layout, TabbedCard } from "@mankindui/core";
import {
  HiShoppingCart as ShoppingCartIcon,
  HiOutlineHandThumbUp as ThumbsUpIcon,
} from "react-icons/hi2";

import Code from "./code.mdx";

const ButtonExample = () => {
  return (
    <TabbedCard componentName="Button">
      <TabbedCard.Preview>
        <>
          <Layout>
            <Button intent="primary">primary</Button>
          </Layout>
          <Layout>
            <Button intent="secondary">secondary</Button>
          </Layout>
          <Layout>
            <Button intent="contained">Contained</Button>
          </Layout>
          <Layout>
            <Button intent="outlined">Outlined</Button>
          </Layout>
          <Layout>
            <Button intent="icon">
              <Icon size="L">
                <ShoppingCartIcon />
              </Icon>
            </Button>
          </Layout>
          <Layout>
            <Button intent="text">Text</Button>
          </Layout>
          <Layout>
            <Button
              intent="contained"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              <Label gap="10px" label="right" labelDirection="right">
                <Icon size="L">
                  <ThumbsUpIcon stroke="blue" />
                </Icon>
              </Label>
            </Button>
          </Layout>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default ButtonExample;
