import "./App.css";

import AccordionExample from "./examples/Accordion";
import InputExample from "./examples/Input";
import CardExample from "./examples/Card";
import ToggleSwitchExample from "./examples/ToggleSwitch";
import ToggleButtonExample from "./examples/ToggleButton";
import TextareaExample from "./examples/Textarea";
import TextExample from "./examples/Text";
import TabsExample from "./examples/Tabs";
import TableExample from "./examples/Table";
import SpinnerExample from "./examples/Spinner";
import SnackbarExample from "./examples/Snackbar";
// import SliderMultiRangeExample from './examples/SliderMultiRange';
import SliderExample from "./examples/Slider";
import SelectExample from "./examples/Select";
import RadioButtonGroupExample from "./examples/RadioButtonGroup";
import RadioButtonExample from "./examples/RadioButton";
import ProgressLoaderExample from "./examples/ProgressLoader";
// import PaginationExample from './examples/Pagination';
import NavbarExample from "./examples/Navbar";
import ListExample from "./examples/List";
import DropdownExample from "./examples/Dropdown";
import DividerExample from "./examples/Divider";
import DialogExample from "./examples/Dialog";
// import DatepickerExample from './examples/Datepicker';
import PopoverExample from "./examples/Popover";
import CounterExample from "./examples/Counter";
// import InputOtpExample from './examples/InputOtp';
import HeadingExample from "./examples/Heading";
import CheckboxGroupExample from "./examples/CheckboxGroup";
import CheckboxExample from "./examples/Checkbox";
// import CalendarExample from './examples/Calendar';
import IconExample from "./examples/Icon";
import ButtonExample from "./examples/Button";
import AvatarExample from "./examples/Avatar";
import { CodeBlock } from "@mankindui/core/components";
import { Heading, Layout, Text } from "@mankindui/core";

// import TreeExample from './examples/Tree';
import FormExample from "./examples/Form";

const App = () => {
  return (
    <>
      <div className="padded">
        <Layout>
          <Heading as="h2" className="text-2xl">
            Introduction
          </Heading>
          <Text>
            MankindUI is a React component library built from the ground up for
            an easier developer experience. The goal of this library is to
            combine the user-friendly modular approach of customizing with
            compound components while leveraging TailwindCSS (known for its
            well-documented utility-first library of reusable classes)
          </Text>
        </Layout>
        <Layout>
          <Heading as="h2" className="text-2xl">
            Installation
          </Heading>
          <Text></Text>
        </Layout>

        <div className="border rounded-lg flex items-center h-20 p-5">
          <CodeBlock darkIcon="black" lightIcon="white">
            npm create vite@latest
          </CodeBlock>
        </div>
        <Text>Select framework: 'React'</Text>
        <Text>Select variant: 'Typescript'</Text>

        <div className="border rounded-lg flex items-center h-20 p-5 mt-10 mb-10">
          <CodeBlock darkIcon="black" lightIcon="white">
            npm i @mankindui/core
          </CodeBlock>
        </div>

        <div className="border rounded-lg flex items-center h-20 p-5">
          <CodeBlock darkIcon="black" lightIcon="white">
            npm i tailwindcss @tailwindcss/vite
          </CodeBlock>
        </div>
        <Text>
          Setup tailwindcss -{" "}
          <a href="https://tailwindcss.com/docs/installation/using-vite">
            ( https://tailwindcss.com/docs/installation/using-vite )
          </a>
        </Text>

        <Layout className="mt-10">
          <Heading as="h2" className="text-2xl">
            Examples
          </Heading>
          <AccordionExample />
          <CardExample />
          <InputExample />
          <AvatarExample />
          <ButtonExample />
          <IconExample />
          <CheckboxExample />
          <CheckboxGroupExample />
          <HeadingExample />
          {/* <BreadcrumbExample /> */}

          {/* 
          <Card>
              <Card.Title>Calendar</Card.Title>
              <Card.Content>
                  <CalendarExample />
              </Card.Content>
          </Card> */}

          {/* <Card>
                <Card.Title>Input OTP</Card.Title>
                <Card.Content>
                    <InputOtpExample />
                </Card.Content>
            </Card> */}

          <CounterExample />
          <PopoverExample />

          {/* 
            <Card>
                <Card.Title>Datepicker</Card.Title>
                <Card.Content>
                    <DatepickerExample />
                </Card.Content>
            </Card> */}
          <DialogExample />
          <DividerExample />
          <DropdownExample />
          <ListExample />
          <NavbarExample />

          {/* 
            <Card>
                <Card.Title>Pagination</Card.Title>
                <Card.Content>
                    <PaginationExample />
                </Card.Content>
            </Card> */}
          <ProgressLoaderExample />
          <RadioButtonExample />
          <RadioButtonGroupExample />
          <SelectExample />
          <SliderExample />

          {/* <Card>
                <Card.Title>Slider Multi Range</Card.Title>
                <Card.Content>
                    <SliderMultiRangeExample />
                </Card.Content>
            </Card> */}
          <SnackbarExample />
          <SpinnerExample />
          <TableExample />
          <TabsExample />
          <TextExample />
          <TextareaExample />
          <ToggleButtonExample />
          <ToggleSwitchExample />

          {/* <TreeExample /> */}
          <FormExample />
        </Layout>
      </div>
    </>
  );
};

export default App;
