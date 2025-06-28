import { Icon, ToggleButton, TabbedCard } from "@mankindui/core";
import { HiHeart as HeartIcon } from "react-icons/hi2";
import Code from "./code.mdx";

const ToggleButtonExample = () => {
  //the context provider (can technically wrap inside the component itself)
  enum ToggleEnumWithMaybe {
    ON = "true",
    OFF = "false",
    // MAYBE = 'maybe'
  }

  return (
    <TabbedCard componentName="Toggle Button">
      <TabbedCard.Preview>
        <>
          <ToggleButton
            enumObj={ToggleEnumWithMaybe}
            render={(current) => {
              switch (current) {
                case "ON":
                  return (
                    <Icon size="L">
                      <HeartIcon />
                    </Icon>
                  );
                default:
                case "OFF":
                  return (
                    <Icon size="L">
                      <HeartIcon color="red" />
                    </Icon>
                  );

                // case 'MAYBE':
                //     return <Icon size="L">'maybe'</Icon>;
              }
            }}
          />
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default ToggleButtonExample;
