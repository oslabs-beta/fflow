const { app, BrowserWindow } = require('electron');
const Store = require('electron-store');
const storage = new Store();
// let dev = false;
// if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
//   dev = true
// }

function createWindow() {
  const getWinSettings = () => {
    const defaultBounds = [1280, 720];
    const size = storage.get('win-size');

    if (size) return size;
    else {
      storage.set('win-size', defaultBounds);
      return defaultBounds;
    }
  };

  const bounds = getWinSettings();

  const saveBounds = (bounds) => {
    storage.set('win-size', bounds);
  };
  // Create the browser window.
  let win = new BrowserWindow({
    width: bounds[0],
    height: bounds[1],
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
    title: 'fflow',
    minWidth: 850,
    minHeight: 600,
    backgroundColor: ' #121212',
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

  // uncomment out to maximise app on load
  // win.maximize();
  win.show();
  // and load the index.html of the app.
  win.loadFile('index.html');
  win.on('resized', () => {
    saveBounds(win.getSize());
  });
  // win.loadURL('http://localhost:3000/');
  // Open the DevTools.
  // win.webContents.openDevTools();
}

// app.on('ready', createWindow);
app.whenReady().then(() => {
  createWindow();
});

// quit app when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Open a window if none are open (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
