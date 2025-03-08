const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      style={{
        position: "fixed",
        bottom: "30px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        textAlign: "center",
        fontSize: "1.5em",
        border: "none",
        backgroundColor: theme === "light" ? "black" : "#fff",
        color: theme === "light" ? "white" : "#222",
      }}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
};

export default ThemeToggle;
