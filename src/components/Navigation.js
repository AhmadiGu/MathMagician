import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/math-magicians/calculator',
      text: 'Calculator',
    },
    {
      id: 2,
      path: '/math-magicians/quote',
      text: 'Quote',
    },
  ];
  return (
    <header>
      <h1 className="nav-title">Math Magicians</h1>
      <nav>
        <ul className="nav-container">
          {
            links.map((link) => (

              <li key={link.id} className="nav-link">
                <NavLink className="link" to={link.path}>{link.text}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
