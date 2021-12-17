// modules
import { useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react';

// assets
import logo from '/src/assets/images/logo-github.png';

const AppHeader = () => {
  console.log("header");

  const [activeRoute, setActiveRoute] = useState('/');
  const items = [
    {
      route: '/',
      label: 'Repo Finder',
    },
    {
      route: '/faq',
      label: 'FAQ',
    },
  ];

  return (
    <>
      <img src={logo} className="github_logo" alt="github logo" />
      <Menu>
        {items.map((el) => (
          <Menu.Item
            as={NavLink}
            to={el.route}
            name={el.label}
            key={el.label}
            active={el.route === activeRoute} //if is the active route, set style in Menu.Item
            onClick={() => { setActiveRoute(el.route); }}// on click store this element route as active
            link={false}
          />
        ))}
      </Menu>
      {/* <NavLink to="/">Repo Finder</NavLink>
      <NavLink to="/faq">FAQ</NavLink> */}
    </>
  );
};

export default AppHeader;
