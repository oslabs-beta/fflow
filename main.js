'use strict';
// Import parts of electron to use
const { app, BrowserWindow, ipcMain } = require('electron');
const Store = require('electron-store');
const os = require('os');
const path = require('path');
const url = require('url');
const pty = require('node-pty');

// Determines the type of shell needed for the terminal based on the user's platform
const shell = os.platform === 'win32' ? 'powershell.exe' : 'zsh';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Keep a reference for dev mode
let dev = false;

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
  dev = true;
}

const storage = new Store();

const createWindow = () => {
  
  const getWinSettings = () => {
    //Gets and stores the previous window's size upon close and restores them
    const defaultBounds = [1280, 1024];
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
    // width: bounds[0],
    // height: bounds[1],
    width: 1440,
    height: 880,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    backgroundColor: '#121212',
    minWidth: 850,
    minHeight: 600,
    maxWidth: 1440,
    maxHeight: 880,
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

  mainWindow.loadURL(indexPath);

  // For the Terminal
  const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    rows: 25,
    cols: 70,
    cwd: process.env.HOME,
    env: process.env,
  });

  // Send incoming data to the Terminal
  ptyProcess.on('data', (data) => {
    mainWindow.webContents.send('terminal.sentData', data);
  });
  // in the main process, when data is received in the terminal,
  // main process writes and adds to ptyProcess
  ipcMain.on('terminal.toTerm', (event, data) => {
    ptyProcess.write(data);
    console.log(data, `being written in ptyMain: ${data}`);
  });

  // in main process, create new window for splash screen
  var splash = new BrowserWindow({
    width: 500,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  });
  // load splashscreen content into created window
  splash.loadFile('./src/assets/splash.html');

  // Don't show main app window until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    // splashscreen to show for 3 seconds minimum
    setTimeout(() => {
      mainWindow.center();
      splash.destroy();
      // uncomment the below and comment out the maximum and minimum height and width
      // in main window to maximise the app
      // mainWindow.maximize();
      mainWindow.show();
      mainWindow.focus();
    }, 3000);

    // Open the DevTools automatically if developing
    if (dev) {
      const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

      installExtension(REACT_DEVELOPER_TOOLS).catch((err) => console.log('Error loading React DevTools: ', err));
      mainWindow.webContents.openDevTools();
    }
  });

  mainWindow.on('resize', () => saveBounds(mainWindow.getSize()));
  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    // mainWindow.webContents.send('terminal.close', () => {
    // });
    ptyProcess.kill();
    mainWindow = null;
  });
};

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
