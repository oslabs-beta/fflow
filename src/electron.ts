const { app, BrowserWindow } = require('electron');

// let dev = false;
// if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
//   dev = true
// }


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1280,
    height: 720,
    show: false,
    webPreferences: {
      nodeIntegration: true
    },
    minWidth: 850,
    minHeight: 600,
  });


  // let indexPath
  // if (dev && process.argv.indexOf('--noDevServer') === -1) {
  //   indexPath = url.format({
  //     protocol: 'http:',
  //     host: 'localhost:8080',
  //     pathname: 'index.html',
  //     slashes: true
  //   })
  // } else {
  //   indexPath = url.format({
  //     protocol: 'file:',
  //     pathname: path.join(__dirname, 'dist', 'index.html'),
  //     slashes: true
  //   })
  // }

  // win.loadURL(indexPath)

  // win.maximize();
  win.show();
  // and load the index.html of the app.
  win.loadFile('index.html');
  // win.loadURL('http://localhost:3000/');
  // Open the DevTools.
  // win.webContents.openDevTools();
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