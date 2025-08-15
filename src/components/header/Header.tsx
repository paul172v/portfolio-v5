import React, { ReactNode } from "react";
import { Link } from "react-scroll";
import classes from "./Header.module.scss";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link offset={-50} to={to} smooth={true} duration={1000}>
    <button className={classes["nav-link"]}>{children}</button>
  </Link>
);

const Header: React.FC = () => {
  const navLinks = [
    { name: "About", to: "anchor-about" },
    { name: "Projects", to: "anchor-projects" },
  ];

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes["nav-links-wrapper"]}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
