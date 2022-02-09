'use strict';

// Import parts of electron to use
const { app, BrowserWindow, Menu } = require('electron');
const Store = require('electron-store');
const storage = new Store();
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Keep a reference for dev mode
let dev = false;

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
  dev = true;
}

function createWindow() {
  const getWinSettings = () => {
    const defaultBounds = [1280, 768];
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
  mainWindow = new BrowserWindow({
    width: bounds[0],
    height: bounds[1],
    show: false,
    webPreferences: {
      preload: path.join(__dirname, './src/electron/preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
    backgroundColor: '#121212',
    minWidth: 850,
    minHeight: 600,
  });

  // and load the index.html of the app.
  let indexPath;

  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true,
    });
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true,
    });
  }
  // if (is.development) {
  //   mainWindow.webContents.openDevTools({ mode: 'detach' });
  //   mainWindow.loadURL('http://localhost:3000');
  // } else {
  //   mainWindow.loadURL(`file://${path.join(__dirname, 'dist', 'index.html')}`);
  // }

  mainWindow.loadURL(indexPath);

  var splash = new BrowserWindow({
    width: 500,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  });

  splash.loadFile('./src/assets/splash.html');

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    splash.close();
    // uncomment out to maximise app on load
    mainWindow.maximize();
    mainWindow.show();
    mainWindow.focus();
    mainWindow.center();

    // Open the DevTools automatically if developing
    if (dev) {
      const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

      installExtension(REACT_DEVELOPER_TOOLS).catch((err) => console.log('Error loading React DevTools: ', err));
      mainWindow.webContents.openDevTools();
    }
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// call createWindow function after whenReady() resolves its promise
// app.whenReady().then(() => {
//   if (process.platform === 'darwin') {
//     app.dock.setMenu(dockMenu)
//   }
// }).then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
