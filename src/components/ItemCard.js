import React, { useState } from "react";

const ItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleAddItem = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={styles.card}>
      <h3>{item.name}</h3>
      <p>Quantity: {quantity}</p>
      <button onClick={handleAddItem}>+</button>
      <button onClick={handleRemoveItem}>-</button>
    </div>
  );
};

const ItemList = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", quantity: 1 },
    { id: 2, name: "Mango", quantity: 1 },
    { id: 3, name: "Banana", quantity: 1 },
    { id: 4, name: "Orange", quantity: 1 },
  ]);

  return (
    <div style={styles.container}>
      <h2>Item List</h2>
      <div style={styles.list}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
  },
  
  card: {
    width: 200,
    height: 200,
    margin: 20,
    padding: 20,
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default ItemList;
