const { app, BrowserWindow } = require('electron');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1300,
    height: 864,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  win.loadFile('index.html');
  // win.loadURL('http://localhost:3000/');
  // Open the DevTools.
  win.webContents.openDevTools();
}

// app.on('ready', createWindow);
app.whenReady().then(() => {
  createWindow()
})

// quit app when all windows are closed 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// Open a window if none are open (macOS)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })