import crypto from "crypto";
import path from "path";
import fs from 'fs'

const calculateHash = async () => {
    const __dirname = path.resolve()
    const pathToFile = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt')
    fs.readFile(pathToFile, (err, data)=>{
        if (err) throw err
        const hash = crypto.createHash('sha256')
        hash.setEncoding('hex')
        hash.write(data)
        hash.end()
        console.log(hash.read())
    })
};

await calculateHash();