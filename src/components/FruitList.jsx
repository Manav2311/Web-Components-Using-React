import React, { useState } from "react";

const FruitList = ({ theme }) => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", color: "red", quantity: 10 },
    { id: 2, name: "Grapes", color: "green", quantity: 15 },
    { id: 3, name: "BlueBerry", color: "blue", quantity: 5 },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    quantity: 1,
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleEdit = (fruit) => {
    setSelectedFruit(fruit);
    setFormData({ ...fruit });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  };

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (formData.name && formData.color && formData.quantity > 1) {
      if (isEditing) {
        if (isConfirmed) {
          setFruits((prevFruits) =>
            prevFruits.map((fruit) =>
              fruit.id === selectedFruit.id ? formData : fruit
            )
          );
          setIsEditing(false);
          setIsConfirmed(false);
        } else {
          alert("Please confirm the changes before saving.");
          return;
        }
      } else {
        const newFruit = { id: Date.now(), ...formData };
        setFruits([...fruits, newFruit]);
      }
      setFormData({ name: "", color: "", quantity: 1 });
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "quantity" ? Number(value) : value,
    });
  };

  const isLightTheme = theme === "light";

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10px",
      height: "100vh",
      backgroundColor: isLightTheme ? "#f3f4f6" : "#2d2d2d",
      color: isLightTheme ? "#000" : "#fff",
      padding: "10px",
      fontFamily: "Arial, sans-serif",
    },
    table: {
      width: "80%",
      borderCollapse: "collapse",
      backgroundColor: isLightTheme ? "#fff" : "#3a3a3a",
      color: isLightTheme ? "#000" : "#ddd",
      borderRadius: "8px",
      overflow: "hidden",
      textAlign: "left",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      marginTop: "20px",
    },
    th: {
      backgroundColor: isLightTheme ? "#e0e0e0" : "#444",
      padding: "12px",
      textAlign: "left",
      borderBottom: "2px solid #ddd",
    },
    td: {
      padding: "12px",
      fontSize: "20px",
      borderBottom: "1px solid #ddd",
      transition: "background 0.3s ease",
    },
    rowHover: {
      backgroundColor: isLightTheme ? "#f5f5f5" : "#555",
    },
    button: {
      padding: "10px 15px",
      margin: "10px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "all 0.3s ease",
      backgroundColor: "gray",
      color: "white",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: isLightTheme ? "#fff" : "#444",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      width: "40%",
      marginTop: "20px",
    },
    input: {
      padding: "12px",
      margin: "8px 0",
      fontSize: "16px",
      width: "80%",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      transition: "border 0.3s ease",
    },
    inputFocus: {
      border: "1px solid rgb(0, 0, 0)",
    },
    label: {
      alignSelf: "flex-start",
      fontSize: "20px",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleAddOrUpdate}>
        <h2>Fruit List </h2>
        <label style={styles.label}>Fruit Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <label style={styles.label}>Fruit Color:</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          style={styles.input}
        />
        <label style={styles.label}>Fruit Quantity:</label>
        <input
          type="number"
          name="quantity"
          min={1}
          value={formData.quantity}
          onChange={handleChange}
          style={styles.input}
        />
        {isEditing && (
          <div>
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
            />
            <label>Confirm Changes</label>
          </div>
        )}
        <div>
          <button type="submit" style={styles.button}>
            {isEditing ? "Save Changes" : "Add Fruit"}
          </button>
        </div>
      </form>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Fruit Name</th>
            <th style={styles.th}>Fruit Color</th>
            <th style={styles.th}>Fruit Quantity</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              <td style={styles.td}>{fruit.name}</td>
              <td style={styles.td}>
                <span
                  style={{
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    backgroundColor: fruit.color,
                    borderRadius: "50%",
                  }}
                ></span>
                &nbsp;{fruit.color}
              </td>
              <td style={styles.td}>{fruit.quantity}</td>
              <td style={styles.td}>
                <button style={styles.button} onClick={() => handleEdit(fruit)}>
                  Edit
                </button>
                <button
                  style={styles.button}
                  onClick={() => handleDelete(fruit.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FruitList;
