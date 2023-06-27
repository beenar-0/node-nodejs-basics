import 'dotenv/config'

const parseEnv = () => {
    let keys = Object.keys(process.env)
    const reg = new RegExp(/RSS_/)
    keys = keys.filter((key)=>{
      return reg.test(key)
    })
    keys.forEach((item)=>{
        console.log(process.env[item])
    })
};

parseEnv();