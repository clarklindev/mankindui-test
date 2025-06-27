import { Button, Icon, Navbar } from "@mankindui/core/components";
import { ModeLightIcon, ModeDarkIcon } from "@mankindui/core/icons";
import { useTheme } from "@mankindui/core/context";
import { useEffect } from "react";

function Header() {
  const { colorScheme, setColorScheme } = useTheme();

  useEffect(() => {
    console.log("darkmode: ", colorScheme);
  }, [colorScheme]);

  return (
    <div>
      <Navbar className="mb-10">
        <Navbar.GroupLeft>
          <h1 className="text-2xl font-bold">MankindUI</h1>
        </Navbar.GroupLeft>

        <Navbar.GroupRight>
          {colorScheme === "dark" ? (
            <Button
              intent="outlined-nohover"
              padding="S"
              onClick={() => setColorScheme("light")}
            >
              <Icon size="L">
                <ModeDarkIcon />
              </Icon>
            </Button>
          ) : (
            <Button
              intent="outlined-nohover"
              padding="S"
              onClick={() => setColorScheme("dark")}
            >
              <Icon size="L">
                <ModeLightIcon />
              </Icon>
            </Button>
          )}
        </Navbar.GroupRight>
      </Navbar>
    </div>
  );
}

export default Header;
