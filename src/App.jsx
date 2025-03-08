// import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./components/Home";
import ToDoList from "./components/ToDoList";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import UserProfile from "./components/UserProfile";
import FruitList from "./components/fruitList";

const style = {
  light: {
    bgColor: "#ffffff",
    color: "#000000",
    margin: "10px",
    padding: "10px",
    card: "#a1b2c3",
    cursor: "pointer",
  },
  dark: {
    bgColor: "#000000",
    color: "#fff",
    margin: "10px",
    padding: "10px",
    card: "#3a3b3c",
    cursor: "pointer",
  },
  input: {
    margin: "10px",
    padding: "10px",
  },
  button: {
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

const container = {
  minwidth: "1000px",
  margin: "0 auto",
  padding: "20px",
  fontSize: "1.5em",
  // backGroundColor : style[theme].card,
};

// const toggleTheme = () => {
//   setTheme((previousTheme) => {
//     previousTheme === "dark" ? "light" : "dark";
//   });
// };


function App() {
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    document.body.style.backgroundColor = style[theme].bgColor;
    document.body.style.color = style[theme].color;
  }, [theme]);

  // Move this function inside App
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div style={container}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} />

      <main>
        {activeTab === "home" && <Home theme={theme} />}
        {activeTab === "todos" && <ToDoList theme={theme} />}
        {activeTab === "counter" && <Counter theme={theme} />}
        {activeTab === "clock" && <Clock theme={theme} />}
        {activeTab === "profile" && <UserProfile theme={theme} />}
        {activeTab === "fruits" && <FruitList theme={theme} />}
      </main>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}


export default App;
