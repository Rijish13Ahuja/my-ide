"use client";

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Editor from '../../components/Editor';
import NoteMaker from '../../components/NoteMaker';
import ListMaker from '../../components/ListMaker';
import ReadmePreview from '../../components/ReadmePreview';

const Home = () => {
  const [files, setFiles] = useState(['example.ed', 'notes.note', 'tasks.lt', 'README.readme']);
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState('');

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setContent('');  // Reset content when a new file is selected
  };

  const handleAddFile = (fileName) => {
    setFiles([...files, fileName]);
  };

  const renderFileContent = () => {
    if (!selectedFile) return null;
    const fileExtension = selectedFile.split('.').pop();

    switch (fileExtension) {
      case 'ed':
        return <Editor content={content} setContent={setContent} />;
      case 'note':
        return <NoteMaker />;
      case 'lt':
        return <ListMaker />;
      case 'readme':
        return <ReadmePreview content={content} />;
      default:
        return <div className="p-4 text-center text-gray-500">Unsupported file type</div>;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Sidebar files={files} onFileSelect={handleFileSelect} onAddFile={handleAddFile} />
      <div className="w-3/4 p-4 bg-white rounded-lg shadow-md">
        {renderFileContent()}
      </div>
    </div>
  );
};

export default Home;
