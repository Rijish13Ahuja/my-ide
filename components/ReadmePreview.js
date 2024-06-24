"use client";

import { useState } from 'react';

const ReadmePreview = () => {
  const [content, setContent] = useState('# README\n\nThis is a preview of your README file.');

  return (
    <div className="p-4 bg-gray-800 rounded-lg text-white">
      <h3 className="text-xl mb-2">README Preview</h3>
      <textarea
        className="w-full h-64 p-2 bg-gray-700 text-white rounded focus:outline-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type here..."
      />
      <div className="mt-4 p-4 bg-gray-700 rounded text-white">
        <h4 className="text-lg mb-2">Preview:</h4>
        <div dangerouslySetInnerHTML={{ __html: content }} className="prose prose-invert" />
      </div>
    </div>
  );
};

export default ReadmePreview;
