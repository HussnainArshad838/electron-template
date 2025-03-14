module.exports = {
    appId: "com.hussnain.my-electron-app",
    productName: "My Electron App",
    files: [
        "build/**/*",
        "node_modules/**/*",
        "public/electron.js"
    ],
    directories: {
        buildResources: "assets"
    },
    mac: {
        category: "public.app-category.utilities",
        target: "dmg"
    },
    win: {
        target: "nsis"
    },
    linux: {
        target: "deb"
    }
};