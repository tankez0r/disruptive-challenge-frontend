import { HttpAdapter } from "../../config/adapters/http/http.adapter"



interface InewUserData {
    username: string,
    email: string,
    role: string,
    password: string
}



export const registerUseCase = async (fetcher: HttpAdapter, newUserdata: InewUserData) => {


    try {
        const newUserData = await fetcher.post('/Users', {
            "username": newUserdata.username,
            "email": newUserdata.email,
            "role": newUserdata.role,
            "password": newUserdata.password
        })
        return newUserData

    } catch (error) {
        console.log(error)
    }


}
