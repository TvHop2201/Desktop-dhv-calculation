const { contextBridge } = require('electron')
const os = require('os')




const API = {
    freeMem: os.freemem(),
    cpu: os.cpus(),
    totalmem: os.totalmem(),
    version: os.version(),
    release: os.release(),
    userInfo: os.userInfo().username,
    type: os.type(),

}
const API2 = {
    freeMem: () => os.freemem()
}
contextBridge.exposeInMainWorld("api", API)
contextBridge.exposeInMainWorld("api2", API2)