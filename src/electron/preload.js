// All of the Node.js APIs are available in the preload process.
// preload script runs before the renderer process is loaded and
// has access to both renderer globals (window and document) and a Node.js environment

// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const dependency of ['chrome', 'node', 'electron']) {
//     replaceText(`${dependency}-version`, process.versions[dependency])
//   }
// })

// const { contextBridge } = require('electron');

// contextBridge.exposeInMainWorld('myAPI', {
//   desktop: true,
// });
