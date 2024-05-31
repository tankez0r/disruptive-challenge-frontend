import { AxiosAdapter } from "./axios.adapter"


const localHostAdapter = new AxiosAdapter({
    baseUrl: "http://localhost:3000/"
})


export { localHostAdapter }