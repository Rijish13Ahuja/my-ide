"use client";

import { useState } from 'react';

const Editor = ({ content, setContent }) => {
  return (
    <textarea
      className="w-full h-full p-4 bg-gray-800 text-white focus:outline-none"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Type here..."
    />
  );
};

export default Editor;
