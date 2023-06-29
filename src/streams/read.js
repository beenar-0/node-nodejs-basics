import fs from 'fs'
import path from "path";

const read = async () => {
    const __dirname = path.resolve()
    const stream = fs.createReadStream(path.resolve(__dirname, 'files', 'fileToRead.txt'))
    stream.on('data', (chunk)=>{
        process.stdout.write(chunk)
    })
    stream.on('end', ()=> console.log('Reading end here'))
};

await read();

