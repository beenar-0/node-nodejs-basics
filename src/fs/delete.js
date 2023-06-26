import path from "path";
import fs from 'fs'

const remove = async () => {
    const __dirname = path.resolve()
    const pathToFile = path.resolve(__dirname, 'files', 'fileToRemove.txt')
    fs.access(pathToFile, (err)=>{
        if (err) throw new Error('FS operation failed')
    })
    fs.rm(pathToFile, (err)=>{if (err) throw err})
};

await remove();