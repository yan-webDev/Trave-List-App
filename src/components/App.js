import { useState } from "react";

// Starting items (both not packed yet)
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

// Numbers for the quantity dropdowns (1 to 10)
const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Logo() {
  return <h1>My Travel List</h1>;
}

// CREATE: the form sends a new item up to App
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Don't add an empty item
    if (!description) return;

    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);

    // Clear the form
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {quantityOptions.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// One item: checkbox + name
function Item({ item, onToggleItem }) {
  return (
    <li>
      {/* UPDATE: tick = packed */}
      <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} ({item.quantity})
      </span>
    </li>
  );
}

// READ: shows all items
function PackingList({ items, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

// Real numbers instead of X, Y, Z
function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list!</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go!"
          : `You have ${numItems} items in the list. You already packed ${numPacked} (${percentage}%).`}
      </em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState(initialItems);

  // CREATE: add the new item to the end
  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  // UPDATE: flip packed true/false for this item
  function handleToggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;