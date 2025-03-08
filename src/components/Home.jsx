import React from "react";

const Home = ({ theme }) => {
  const isLightTheme = theme === "light";

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
      height: "100vh",
      backgroundColor: isLightTheme ? "#f3f4f6" : "#121212",
      padding: "20px",
      transition: "background 0.3s ease",
    },
    card: {
      maxWidth: "600px",
      backgroundColor: isLightTheme ? "#fff" : "#1e1e1e",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: isLightTheme
        ? "0 4px 10px rgba(0, 0, 0, 0.1)"
        : "0 4px 10px rgba(255, 255, 255, 0.1)",
      textAlign: "center",
      color: isLightTheme ? "#333" : "#f9fafb",
      transition: "background 0.3s ease, color 0.3s ease",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    text: {
      fontSize: "18px",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Welcome to My Projects</h1>
        <p style={styles.text}>
          Explore my projects showcasing my ability to create dynamic web
          applications using React hooks like <b>useState</b>, <b>useRef</b>,
          and <b>useEffect</b>
          for efficient state management and conditional rendering.
        </p>
      </div>
    </div>
  );
};

export default Home;
