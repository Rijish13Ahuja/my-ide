"use client";

import { useState } from 'react';

const ListMaker = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2']);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg text-white">
      <h3 className="text-xl mb-2">List Maker</h3>
      <ul className="mb-4">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New Item"
        className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
      />
      <button
        onClick={handleAddItem}
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Add Item
      </button>
    </div>
  );
};

export default ListMaker;
