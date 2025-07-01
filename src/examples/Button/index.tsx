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
            <Button intent="primary" className="px-4 py-2">
              primary
            </Button>
          </Layout>
          <Layout>
            <Button intent="secondary" className="px-4 py-2">
              secondary
            </Button>
          </Layout>
          <Layout>
            <Button intent="contained" className="px-4 py-2">
              Contained
            </Button>
          </Layout>
          <Layout>
            <Button intent="outlined" className="px-4 py-2">
              Outlined
            </Button>
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
            <Button intent="contained" className="px-4 py-2">
              <Label gap="15px" label="right" labelDirection="right">
                <Icon size="L">
                  <ThumbsUpIcon stroke="black" />
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
