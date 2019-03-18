var electron = require('electron');
var fs = require('fs');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow;

var rawdata = fs.readFileSync('winProperties.json');  
var winProp = JSON.parse(rawdata);

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

app.on('ready', createWindow);

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