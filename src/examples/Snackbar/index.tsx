import { useState } from "react";

import { HiOutlineClipboardDocument as ClipboardIcon } from "react-icons/hi2";
import { Snackbar, Button, Icon, TabbedCard } from "@mankindui/core/components";
import Code from "./code.mdx";

const SnackbarExample = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onClickHandler = () => {
    console.log("onClickHandler");
    setShowSnackbar(true);
  };

  return (
    <TabbedCard componentName="Snackbar">
      <TabbedCard.Preview>
        <>
          {showSnackbar && (
            <Snackbar setShowSnackbar={setShowSnackbar}>
              copied to clipboard
            </Snackbar>
          )}
          <Button onClick={onClickHandler} intent="icon" padding={"none"}>
            <Icon size="L">
              <ClipboardIcon />
            </Icon>
          </Button>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default SnackbarExample;
