import './App.css';
import { Button, Card, Icon, Navbar } from '@fightclub/libtest';
import { HiOutlineSun as ModeLightIcon, HiOutlineMoon as ModeDarkIcon } from 'react-icons/hi2';
import { useTheme } from '@fightclub/libtest/context';
import { useEffect } from 'react';

import AccordionExample from './examples/Accordion';
import InputExample from './examples/Input';
import CardExample from './examples/Card';
import ToggleSwitchExample from './examples/ToggleSwitch';
import ToggleButtonExample from './examples/ToggleButton';
import TextareaExample from './examples/Textarea';
import TextExample from './examples/Text';
import TabsExample from './examples/Tabs';
import TableExample from './examples/Table';
import SpinnerExample from './examples/Spinner';
import SnackbarExample from './examples/Snackbar';
// import SliderMultiRangeExample from './examples/SliderMultiRange';
import SliderExample from './examples/Slider';
import SelectExample from './examples/Select';
import RadioButtonGroupExample from './examples/RadioButtonGroup';
import RadioButtonExample from './examples/RadioButton';
import ProgressLoaderExample from './examples/ProgressLoader';
// import PaginationExample from './examples/Pagination';
import NavbarExample from './examples/Navbar';
import ListExample from './examples/List';
import DropdownExample from './examples/Dropdown';
import DividerExample from './examples/Divider';
import DialogExample from './examples/Dialog';
// import DatepickerExample from './examples/Datepicker';
import PopoverExample from './examples/Popover';
import CounterExample from './examples/Counter';
// import InputOtpExample from './examples/InputOtp';
import HeadingExample from './examples/Heading';
import CheckboxGroupExample from './examples/CheckboxGroup';
import CheckboxExample from './examples/Checkbox';
// import CalendarExample from './examples/Calendar';
import IconExample from './examples/Icon';
import ButtonExample from './examples/Button';
import AvatarExample from './examples/Avatar';
// import TreeExample from './examples/Tree';

const App = () => {
    const { colorScheme, setColorScheme } = useTheme();

    useEffect(() => {
        console.log('darkmode: ', colorScheme);
    }, [colorScheme]);

    return (
        <>
            <div>
                <Navbar>
                    <Navbar.GroupLeft>
                        <h1 className="text-3xl bg-red-500 font-bold underline">Vite-lib</h1>
                    </Navbar.GroupLeft>

                    <Navbar.GroupRight>
                        {colorScheme === 'dark' ? (
                            <Button intent="outlined-nohover" padding="S" onClick={() => setColorScheme('light')}>
                                <Icon size="L">
                                    <ModeDarkIcon />
                                </Icon>
                            </Button>
                        ) : (
                            <Button intent="outlined-nohover" padding="S" onClick={() => setColorScheme('dark')}>
                                <Icon size="L">
                                    <ModeLightIcon />
                                </Icon>
                            </Button>
                        )}
                    </Navbar.GroupRight>
                </Navbar>
            </div>
            <Card className="mt-2">
                <Card.Title>Accordion</Card.Title>
                <Card.Content>
                    <AccordionExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Card</Card.Title>
                <Card.Content>
                    <CardExample />
                </Card.Content>
            </Card>    

            <Card>
                <Card.Title>Input</Card.Title>
                <Card.Content>
                    <InputExample />
                </Card.Content>
            </Card>       

            
            <Card>
                <Card.Title>Avatar</Card.Title>
                <Card.Content>
                    <AvatarExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Button</Card.Title>
                <Card.Content>
                    <ButtonExample />
                </Card.Content>
            </Card>

            

            {/* <BreadcrumbExample /> */}

            <Card>
                <Card.Title>Icon</Card.Title>
                <Card.Content>
                    <IconExample />
                </Card.Content>
            </Card>
{/* 
            <Card>
                <Card.Title>Calendar</Card.Title>
                <Card.Content>
                    <CalendarExample />
                </Card.Content>
            </Card> */}

            <Card>
                <Card.Title>Checkbox</Card.Title>
                <Card.Content>
                    <CheckboxExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Checkbox Group</Card.Title>
                <Card.Content>
                    <CheckboxGroupExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Heading</Card.Title>
                <Card.Content>
                    <HeadingExample />
                </Card.Content>
            </Card>

            

            {/* <Card>
                <Card.Title>Input OTP</Card.Title>
                <Card.Content>
                    <InputOtpExample />
                </Card.Content>
            </Card> */}

            <Card>
                <Card.Title>Counter</Card.Title>
                <Card.Content>
                    <CounterExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Popover</Card.Title>
                <Card.Content>
                    <PopoverExample />
                </Card.Content>
            </Card>
{/* 
            <Card>
                <Card.Title>Datepicker</Card.Title>
                <Card.Content>
                    <DatepickerExample />
                </Card.Content>
            </Card> */}

            <Card>
                <Card.Title>Dialog</Card.Title>
                <Card.Content>
                    <DialogExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Divider</Card.Title>
                <Card.Content>
                    <DividerExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Dropdown</Card.Title>
                <Card.Content>
                    <DropdownExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>List</Card.Title>
                <Card.Content>
                    <ListExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Navbar</Card.Title>
                <Card.Content>
                    <NavbarExample />
                </Card.Content>
            </Card>
{/* 
            <Card>
                <Card.Title>Pagination</Card.Title>
                <Card.Content>
                    <PaginationExample />
                </Card.Content>
            </Card> */}

            <Card>
                <Card.Title>Progress loader</Card.Title>
                <Card.Content>
                    <ProgressLoaderExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Radio Button</Card.Title>
                <Card.Content>
                    <RadioButtonExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Radio Button Group</Card.Title>
                <Card.Content>
                    <RadioButtonGroupExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Select</Card.Title>
                <Card.Content>
                    <SelectExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Slider</Card.Title>
                <Card.Content>
                    <SliderExample />
                </Card.Content>
            </Card>

            {/* <Card>
                <Card.Title>Slider Multi Range</Card.Title>
                <Card.Content>
                    <SliderMultiRangeExample />
                </Card.Content>
            </Card> */}

            <Card>
                <Card.Title>Snackbar</Card.Title>
                <Card.Content>
                    <SnackbarExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Spinner</Card.Title>
                <Card.Content>
                    <SpinnerExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Table</Card.Title>
                <Card.Content>
                    <TableExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Tabs</Card.Title>
                <Card.Content>
                    <TabsExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Text</Card.Title>
                <Card.Content>
                    <TextExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Textarea</Card.Title>
                <Card.Content>
                    <TextareaExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Toggle</Card.Title>
                <Card.Content>
                    <ToggleButtonExample />
                </Card.Content>
            </Card>

            <Card>
                <Card.Title>Toggle switch</Card.Title>
                <Card.Content>
                    <ToggleSwitchExample />
                </Card.Content>
            </Card>
            {/* <TreeExample /> */}
        </>
    );
};

export default App;
