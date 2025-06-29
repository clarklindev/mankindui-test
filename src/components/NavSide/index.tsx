import { useMenu } from "@mankindui/core/context";
import { Heading, HeadingProps } from "@mankindui/core";

import styles from "./NavSide.module.css";
import { CustomNavLink } from "../CustomNavLink";

type NavSideProps = {
  children?: React.ReactNode;
  className?: string;
};
const NavSide = ({ children, className }: NavSideProps) => {
  const { isOpen } = useMenu();

  return (
    // isOpen refers to when media queries is on small screens and the menu button is shown instead of the nav always being there.
    <aside
      className={[
        styles.NavSide,
        "overflow-wrap break-words p-8 border-r-0",
        isOpen ? "block" : "none",
        className,
      ].join(" ")}
    >
      <nav className="flex flex-col">{children}</nav>
    </aside>
  );
};

const NavGroup = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={["flex flex-col mb-4", className].join(" ")}>
      {children}
    </div>
  );
};

const NavHeading = ({ className, as, children, ...rest }: HeadingProps) => {
  return (
    <Heading as={as} className={className} {...rest}>
      {children}
    </Heading>
  );
};

const NavLink = ({
  children,
  to,
  className,
}: {
  className?: string;
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <CustomNavLink
      to={to}
      className={[
        "block",
        "rounded-md",
        `text-[var(--text)]`,
        `hover:text-[var(--text-hover)]`,
        "hover:bg-[var(--button-background)]",
        className,
      ].join(" ")}
    >
      {children}
    </CustomNavLink>
  );
};

NavSide.Heading = NavHeading;
NavSide.Link = NavLink;
NavSide.Group = NavGroup;

export { NavSide };
