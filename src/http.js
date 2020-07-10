import axios from "axios"


const serve = axios.create({ timeout: 1000*12 })

serve.interception.request.use(
    config => {
        return config;
    },
    err => Promise.error(error)
)

serve.interception.response.use(
    res => Promise.resolve(res)
    err => {
        console.log(err)
    }
)

export default serve;
