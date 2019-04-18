import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';



const isDevelopment = process.env.NODE_ENV !== 'production';

let mainWindow: BrowserWindow | undefined;

app.on('activate', () => {
    if (mainWindow === null) {
        mainWindow = createMainWindow();
    }
});

app.on('ready', () => {
    mainWindow = createMainWindow();
});

app.on('window-all-closed', () => {
    // on macOS it is common for applications to stay open until the user explicitly quits
    if (process.platform !== 'darwin') {
        app.quit()
    }
});


function createMainWindow(): BrowserWindow {
    const window = new BrowserWindow()

    if (isDevelopment) {
        window.webContents.openDevTools()
    }

    if (isDevelopment) {
        window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
    }
    else {
        window.loadURL(formatUrl({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }))
    }

    window.on('closed', () => {
        mainWindow = undefined;
    })

    window.webContents.on('devtools-opened', () => {
        window.focus()
        setImmediate(() => {
            window.focus()
        })
    })

    return window
}
