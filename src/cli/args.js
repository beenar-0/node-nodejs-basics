const parseArgs = () => {
    const reg = new RegExp(/--\w+/)
    process.argv.forEach((item, index, arr)=>{
        if (reg.test(item)) console.log(item.slice(2) + ` is ${arr[index+1]}`)
    })
};

parseArgs();