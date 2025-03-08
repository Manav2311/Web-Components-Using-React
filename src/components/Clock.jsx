import React, { useEffect, useRef, useState } from "react";

const Clock = ({ theme }) => {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  
  const formatTime = (data) => {
    let hours = data.getHours();
    const minutes = data.getMinutes().toString().padStart(2, "0");
    const seconds = data.getSeconds().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; 
    return `${hours}:${minutes}:${seconds} ${amPm}`;
  };

  // Format Date as: Sunday, March 10, 2025
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Set Greeting Message with Emoji
  const setGreeting = (hours) => {
    if (hours < 12) return "☀️ Good Morning";
    if (hours < 16) return "⛅ Good Afternoon";
    return "🌙 Good Evening";
  };

  const isLightTheme = theme === "light";

  // Styling
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop:"10px",
      height: "100vh",
      backgroundColor: isLightTheme ? "#f3f4f6" : "#121212",
      transition: "background 0.3s ease",
    },
    clockBox: {
      textAlign: "center",
      padding: "80px 40px",
      borderRadius: "20px",
      boxShadow: isLightTheme
        ? "0 20px 40px rgba(0, 0, 0, 0.2)"
        : "0 20px 40px rgba(255, 255, 255, 0.1)",
      backgroundColor: isLightTheme ? "#fff" : "#1e1e1e",
      color: isLightTheme ? "#333" : "#fff",
      width: "95%",
      maxWidth: "700px",
      minHeight: "400px", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      transition: "background 0.3s ease, color 0.3s ease",
    },
    greeting: {
      fontSize: "42px", 
      fontWeight: "bold",
      marginBottom: "20px",
    },
    time: {
      fontSize: "64px", 
      fontWeight: "bold",
      letterSpacing: "2px",
      marginBottom: "20px",
    },
    date: {
      fontSize: "28px", 
      opacity: 0.8,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.clockBox}>
        <div style={styles.greeting}>{setGreeting(time.getHours())}</div>
        <div style={styles.time}>{formatTime(time)}</div>
        <div style={styles.date}>{formatDate(time)}</div>
      </div>
    </div>
  );
};

export default Clock;
