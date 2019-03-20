var electron = require('electron');
var fs = require('fs');
var path = require('path');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow;

//const configFile = path.join(path.dirname(__dirname), 'Desktop Timer', 'config.json');
var rawdata;
var winProp; 

try { //for builts
    rawdata = fs.readFileSync('resources/app/config.json'); 
    winProp = JSON.parse(rawdata);
    app.on('ready', createWindow);

} catch (er) { //for development
    rawdata = fs.readFileSync('config.json');
    winProp = JSON.parse(rawdata);
    app.on('ready', createWindow);
}

//var winProp = JSON.parse(rawdataBuild);

function createWindow () {
    mainWindow = new BrowserWindow({ 
        width: winProp.width,
        height: winProp.height,
        frame: winProp.frame,
        windows10Frame: winProp.windows10Frame,
        resizable: winProp.resizable,
        transparent: winProp.transparent,
        icon: winProp.icon,
        minWidth: winProp.minWidth,
        minHeight: winProp.minHeight,
        maxWidth: winProp.maxWidth,
        maxHeight: winProp.maxHeight,
        x: winProp.x,
        y: winProp.y,
        center: winProp.center,
        movable: winProp.movable,
        minimizable: winProp.minimizable,
        maximizable: winProp.maximizable,
        closable: winProp.closable,
        alwaysOnTop: winProp.alwaysOnTop,
        fullscreen: winProp.fullscreen,
        skipTaskbar: winProp.skipTaskbar,
        kiosk: winProp.kiosk,
        title: winProp.title,
        acceptFirstMouse: winProp.acceptFirstMouse,
        autoHideMenuBar: winProp.autoHideMenuBar,
        hasShadow: winProp.hasShadow,
        opacity: winProp.opacity,
        titleBarStyle: winProp.titleBarStyle,
        fullscreenWindowTitle: winProp.fullscreenWindowTitle
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    //Open the DevTools.
    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

//app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow == null) {
        createWindow();
    }
});