"use client";

const Sidebar = ({ onFileSelect }) => {
  const files = ['example.ed', 'example.note', 'example.lt', 'example.readme'];

  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl mb-4">Files</h2>
      <ul>
        {files.map(file => (
          <li
            key={file}
            className="mb-2 cursor-pointer hover:text-blue-400"
            onClick={() => onFileSelect(file)}
          >
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
