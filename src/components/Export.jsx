import React from 'react';
import { useSelector } from 'react-redux';

const Export = () => {
  const codePreviewState = useSelector((state) => state.canvas.code);

  const exportData = () => {
    const exportCode = `data:jsx;chatset=utf-8,${encodeURIComponent(codePreviewState)}`;
    const link = document.createElement('a');
    link.href = exportCode;
    link.download = 'App.jsx';
    link.click();
  };

  return (
    <div className='export-container'>
      <button
        class='block text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
        type='button'
        id='export-button'
        onClick={exportData}
      >
        Export
      </button>
    </div>
  );
};

export default Export;
