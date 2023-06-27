import fs from 'fs'
import path from 'path'

const rename = async () => {
    const __dirname = path.resolve()
    const wrongPath = path.resolve(__dirname, 'files', 'wrongFilename.txt')
    const correctPath = path.resolve(__dirname, 'files', 'properFilename.md')
    fs.access(correctPath, (err)=>{
        if (!err) throw new Error('FS operation failed: proper file already exists')
    })
    fs.access(wrongPath, (err)=>{
        if (err) throw new Error('FS operation failed: wrong file does not exist')
    })
    fs.rename(wrongPath, correctPath, (err)=>{
        if (err) throw new Error('FS operation failed')
    })
};

await rename();