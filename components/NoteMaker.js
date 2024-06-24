"use client";

import { useState } from 'react';

const NoteMaker = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: 'Note 1', category: 'todo' },
    { id: 2, text: 'Note 2', category: 'in-progress' },
  ]);

  const [newNoteTexts, setNewNoteTexts] = useState({
    todo: '',
    'in-progress': '',
    done: '',
  });

  const handleAddNote = (category) => {
    if (newNoteTexts[category].trim()) {
      const newNote = { id: Date.now(), text: newNoteTexts[category].trim(), category };
      setNotes([...notes, newNote]);
      setNewNoteTexts({ ...newNoteTexts, [category]: '' });
    }
  };

  const handleDragEnd = (event, note) => {
    const newCategory = event.target.dataset.category;
    if (newCategory) {
      setNotes(notes.map(n => n.id === note.id ? { ...n, category: newCategory } : n));
    }
  };

  const handleInputChange = (category, text) => {
    setNewNoteTexts({ ...newNoteTexts, [category]: text });
  };

  return (
    <div className="flex space-x-4 text-white">
      {['todo', 'in-progress', 'done'].map(category => (
        <div
          key={category}
          className="w-1/3 p-4 bg-gray-800 rounded-lg"
          data-category={category}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDragEnd(e, JSON.parse(e.dataTransfer.getData('note')))}
        >
          <h3 className="text-xl mb-2">{category.toUpperCase()}</h3>
          <input
            type="text"
            value={newNoteTexts[category]}
            onChange={(e) => handleInputChange(category, e.target.value)}
            placeholder="New Note Text"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
          <button
            className="mb-4 p-2 bg-blue-500 text-white rounded w-full"
            onClick={() => handleAddNote(category)}
          >
            Add Note
          </button>
          {notes.filter(note => note.category === category).map(note => (
            <div
              key={note.id}
              draggable
              onDragStart={(e) => e.dataTransfer.setData('note', JSON.stringify(note))}
              className={`p-2 mb-2 border rounded ${note.category === 'todo' ? 'border-red-500' : note.category === 'in-progress' ? 'border-yellow-500' : 'border-green-500'}`}
            >
              {note.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NoteMaker;
