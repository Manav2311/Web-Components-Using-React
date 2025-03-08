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
    quantity: 0,
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

  const handleAdd = (e) => {
    e.preventDefault();
    if (formData.name && formData.color && formData.quantity > 0) {
      const newFruit = { id: Date.now(), ...formData };
      setFruits([...fruits, newFruit]);
      setFormData({ name: "", color: "", quantity: 0 });
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
    }
  };

  const isLightTheme = theme === "light";

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "10px",
      height: "100vh",
      backgroundColor: isLightTheme ? "#f3f4f6" : "#2d2d2d",
      transition: "background 0.3s ease",
      padding: "20px",
    },
    table: {
      width: "80%",
      borderCollapse: "collapse",
      backgroundColor: isLightTheme ? "#fff" : "#3a3a3a",
      color: isLightTheme ? "#000" : "#ddd",
      borderRadius: "8px",
      overflow: "hidden",
      fontSize: "22px",
      marginBottom: "20px",
    },
    th: {
      backgroundColor: isLightTheme ? "#e0e0e0" : "#444",
      padding: "18px",
      textAlign: "left",
      borderBottom: "2px solid #ddd",
      fontSize: "24px",
    },
    td: {
      padding: "16px",
      borderBottom: "1px solid #ddd",
      fontSize: "22px",
    },
    button: {
      padding: "14px 18px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      fontSize: "20px",
      marginRight: "12px",
      backgroundColor: "#6c757d",
      color: "white",
    },
    input: {
      width: "100%",
      padding: "14px",
      borderRadius: "10px",
      border: "1px solid #bbb",
      fontSize: "20px",
    },
    label: {
      fontSize: "22px",
      fontWeight: "bold",
      marginRight: "15px",
    },
    formGroup: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
    },
    addFormContainer: {
      with: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.addFormContainer}>
        <form onSubmit={handleAdd}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Fruit Name: </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter Fruit Name"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Color: </label>
            <input
              type="text"
              name="color"
              placeholder="Enter Fruit color"
              value={formData.color}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Quantity: </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Add Fruit
          </button>
        </form>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Color</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              <td style={styles.td}>{fruit.name}</td>
              <td style={styles.td}>
                {" "}
                <span
                  style={{
                    display: "inline-block",
                    width: "15px",
                    height: "15px",
                    backgroundColor: fruit.color,
                    borderRadius: "50%",
                  }}
                ></span>&nbsp;
                {fruit.color}
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
