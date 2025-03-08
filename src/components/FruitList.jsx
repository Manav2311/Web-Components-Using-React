import React, { useState, useRef } from "react";

const FruitList = ({ theme }) => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", color: "red", quantity: 10 },
    { id: 2, name: "Grapes", color: "green", quantity: 15 },
    { id: 3, name: "BlueBerry", color: "blue", quantity: 5 },
  ]);
  const [newFruit, setNewFruit] = useState({ name: "", color: "", quantity: 1 });
  const [editingFruit, setEditingFruit] = useState(null);
  const inputRef = useRef(null);

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "400px",
      margin: "auto",
      backgroundColor: theme === "dark" ? "#333" : "#fff",
      color: theme === "dark" ? "#fff" : "#000",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
      marginBottom: "10px"
    },
    button: {
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      marginRight: "5px"
    },
    addButton: {
      backgroundColor: "blue",
      color: "white"
    },
    editButton: {
      backgroundColor: "orange",
      color: "white"
    },
    deleteButton: {
      backgroundColor: "red",
      color: "white"
    },
    quantityButton: {
      backgroundColor: "green",
      color: "white",
      padding: "5px 10px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      margin: "0 5px"
    },
    fruitItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      marginBottom: "5px",
      backgroundColor: "#f9f9f9"
    },
    colorIndicator: (color) => ({
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      backgroundColor: color,
      display: "inline-block",
      marginRight: "10px"
    })
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFruit({ ...newFruit, [name]: name === "quantity" ? Number(value) : value });
  };

  const addOrUpdateFruit = (e) => {
    e.preventDefault();
    if (!newFruit.name || !newFruit.color) return;

    if (editingFruit) {
      setFruits(fruits.map((fruit) => (fruit.id === editingFruit.id ? { ...newFruit, id: fruit.id } : fruit)));
      setEditingFruit(null);
    } else {
      const newId = fruits.length > 0 ? Math.max(...fruits.map((f) => f.id)) + 1 : 1;
      setFruits([...fruits, { ...newFruit, id: newId }]);
    }
    setNewFruit({ name: "", color: "", quantity: 1 });
    inputRef.current.focus();
  };

  const editFruit = (fruit) => {
    setNewFruit({ name: fruit.name, color: fruit.color, quantity: fruit.quantity });
    setEditingFruit(fruit);
  };

  const deleteFruit = (id) => {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  };

  const updateQuantity = (id, change) => {
    setFruits(fruits.map((fruit) => fruit.id === id ? { ...fruit, quantity: Math.max(0, fruit.quantity + change) } : fruit));
  };

  return (
    <div style={styles.container}>
      <h1>Fruit Inventory</h1>
      <form onSubmit={addOrUpdateFruit}>
        <input type="text" name="name" ref={inputRef} value={newFruit.name} onChange={handleInputChange} style={styles.input} placeholder="Fruit name" required />
        <input type="text" name="color" value={newFruit.color} onChange={handleInputChange} style={styles.input} placeholder="Color" required />
        <input type="number" name="quantity" value={newFruit.quantity} onChange={handleInputChange} style={styles.input} min={1} placeholder="Quantity" required />
        <button type="submit" style={{ ...styles.button, ...styles.addButton }}>{editingFruit ? "Update Fruit" : "Add Fruit"}</button>
      </form>
      <div>
        {fruits.length === 0 ? (
          <p>No Fruits in the list.</p>
        ) : (
          fruits.map((fruit) => (
            <div key={fruit.id} style={styles.fruitItem}>
              <div>
                <span style={styles.colorIndicator(fruit.color)}></span>
                <strong>{fruit.name}</strong> - {fruit.quantity} in stock
              </div>
              <div>
                <button onClick={() => updateQuantity(fruit.id, 1)} style={styles.quantityButton}>+</button>
                <button onClick={() => updateQuantity(fruit.id, -1)} style={styles.quantityButton}>-</button>
                <button onClick={() => editFruit(fruit)} style={{ ...styles.button, ...styles.editButton }}>Edit</button>
                <button onClick={() => deleteFruit(fruit.id)} style={{ ...styles.button, ...styles.deleteButton }}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FruitList;
