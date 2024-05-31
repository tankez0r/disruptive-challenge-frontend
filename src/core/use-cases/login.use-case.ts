import { UseFormSetError } from "react-hook-form"
import { HttpAdapter } from "../../config/adapters/http/http.adapter"



interface IuserData {
    email: string,
    password: string
}



export const loginUseCase = async (fetcher: HttpAdapter, userdata: IuserData, setErrors: UseFormSetError<IuserData>): Promise<string> => {


    try {
        const getToken = await fetcher.post('/Users/login', {
            "email": userdata.email,
            "password": userdata.password
        })
        return getToken as string

    } catch (error) {
        setErrors("password", { message: "contraseña o correo invalido" })
        return ""
    }

}
