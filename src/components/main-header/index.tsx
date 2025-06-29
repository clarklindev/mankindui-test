import { Button, Icon, Navbar } from "@mankindui/core/components";
import { ModeLightIcon, ModeDarkIcon, GithubIcon } from "@mankindui/core/icons";
import { useTheme } from "@mankindui/core/context";
import { useEffect } from "react";
import { Link } from "react-router";

function Header() {
  const { colorScheme, setColorScheme } = useTheme();

  useEffect(() => {
    console.log("darkmode: ", colorScheme);
  }, [colorScheme]);

  return (
    <div>
      <Navbar className="mb-10 fixed z-40">
        <Navbar.GroupLeft>
          <Link to="/">
            <h1 className="text-2xl font-bold">MankindUI</h1>
          </Link>
        </Navbar.GroupLeft>

        <Navbar.GroupRight>
          <div className="flex items-center gap-2">
            <Link
              to="https://github.com/clarklindev/mankindui"
              target="_blank"
              aria-label="github repo"
            >
              <Icon size="M">
                <GithubIcon className="dark:stroke-white dark:fill-white stroke-black fill-black" />
              </Icon>
            </Link>

            <>
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
            </>
          </div>
        </Navbar.GroupRight>
      </Navbar>
    </div>
  );
}

export default Header;
