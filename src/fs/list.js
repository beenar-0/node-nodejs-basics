import fs from 'fs'
import path from 'path'

const list = async () => {
    const __dirname = path.resolve()
    const pathToDir = path.resolve(__dirname, 'files')
    fs.access(pathToDir, (err)=>{
        if (err) throw new Error('FS operation failed')
    })
    fs.readdir(pathToDir, (err, files)=>{
        if (err) throw new Error('FS operation failed')
        console.log(files)
    })
};

await list();