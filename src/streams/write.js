import fs from 'fs'
import path from "path";

const write = async () => {
    const __dirname = path.resolve()
    const pathToFile = path.resolve(__dirname, 'files', 'fileToWrite.txt')
    const stream = fs.createWriteStream(pathToFile)
    process.stdin.on('data', data => {
        stream.write(data)
        process.exit()
    })
};

await write();