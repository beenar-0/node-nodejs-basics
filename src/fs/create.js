import fs from 'fs'
import path from "path";
import {fileURLToPath} from 'url'

const create = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const pathToFile = path.resolve(__dirname, 'files', 'fresh.txt')
    fs.access(pathToFile, (err) => {if (!rr) throw new Error('FS operation failed')})
    fs.writeFile(pathToFile, 'I am fresh and young', (err) => {
        if (err) throw err
        console.log('success')
    })
};

await create();