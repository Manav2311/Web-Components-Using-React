import reactLogo from '../assets/react.svg'
import React, { Fragment } from "react";
import ThemeToggle from './ThemeToggle';

function Header({ activeTab, setActiveTab, theme}) {
  const navListItem = [
    { id: "home", lable: "Home" },
    { id: "todos", lable: "To-do-List" },
    { id: "clock", lable: "Clock" },
    { id: "counter", lable: "Counter" },
    {id:"profile", lable:"User Profile"},
    { id: "fruits", lable: "Fruit List" },
  ];

  const headerStyle = {
    display: "flex",
    position: "sticky",
    top: 0,
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: `1px solid ${theme === "light" ? "#ddd" : "#444"}`,
  };

  const navlistStyle = {
    display: "flex",
    gap: "10px",
  };
  

  // const toggleTheme = () => {
  //   setTheme((previousTheme) => {
  //     previousTheme === "dark" ? "light" : "dark";
  //   });
  // };

  return (
    <Fragment>
      <header style={headerStyle}>
        <div>
        
        <span style={{fontSize: "1.5em", fontWeight: "bold"}}><strong>Projects</strong></span>
        </div>

        <nav>
          <ul style={navlistStyle}>
            {navListItem.map((item) => (
              <li
                key={item.id}
                style={{
                  cursor: "pointer",
                  padding: "5px 10px",
                  color: activeTab === item.id ? "white" : "inherit",
                  backgroundColor:
                    activeTab === item.id ? "gray" : "transparent",
                    fontSize: "1.2em",
                  listStyle: "none",
                }}
                onClick={() => setActiveTab(item.id)}
              >
                {item.lable}
              </li>
            ))}
          </ul>
        </nav>


      </header>
    </Fragment>
  );
}

export default Header;
