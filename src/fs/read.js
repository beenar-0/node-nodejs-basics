import fs from 'fs'
import path from 'path'

const read = async () => {
    const __dirname = path.resolve()
    const pathToFile = path.resolve(__dirname, 'files', 'fileToRead.txt')
    fs.readFile(pathToFile, 'utf8',(err, content)=>{
        if (err) throw new Error('FS operation failed')
        console.log(content)
    })
};

await read();