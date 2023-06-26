import fs from 'fs'
import path from "path";

const copy = async () => {
    const __dirname = path.resolve()
    const pathToFiles = path.resolve(__dirname, 'files')
    fs.mkdir('files_copy', {recursive:false}, (err)=>{
        if (err) throw new Error("FS operation failed")
    })
    const pathToCopy = path.resolve(__dirname, 'files_copy')
    fs.readdir(pathToFiles, (err, files)=>{
        if (err) throw err
        files.forEach((file) => {
            const oldPath = path.resolve(pathToFiles, file)
            const newPath = path.resolve(pathToCopy, file)
            fs.copyFile(oldPath, newPath, fs.constants.COPYFILE_EXCL, (err) => {
                if (err) throw new Error("FS operation failed")
            })
        })
    })
};

await copy();
