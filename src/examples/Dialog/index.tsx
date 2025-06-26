import { useState } from "react";
import { Dialog, TabbedCard } from "@fightclub/libtest/components";
import Code from "./code.mdx";

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <TabbedCard componentName="Dialog">
      <TabbedCard.Preview>
        <>
          <div className="">
            <button
              className="bg-green-500 text-white px-6 py-3 rounded"
              onClick={toggleOpen}
            >
              Open
            </button>

            <Dialog isOpen={isOpen} onClose={toggleOpen} size="medium" />
          </div>{" "}
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default DialogExample;
