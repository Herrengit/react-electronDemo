const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({ 
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      javascript: true,
      plugins: true,
      nodeIntegration: false,
      webSecurity: false,
      preload: path.join(__dirname, './public/render.js') // 预加载的 js 文件内仍可以使用 Nodejs 的 API
    }
  })

  // 加载应用
  mainWindow.loadURL('http://localhost:3000/')

  // 开发者工具
  mainWindow.webContents.openDevTools()

  // 关闭window
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

ipcMain.on('minimize', () => {
  mainWindow.minimize()
})

ipcMain.on('hide', () => {
  mainWindow.hide()
})

// 初始化
app.on('ready', createWindow)

// 全部窗口关闭时退出应用
app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow()
  }
})