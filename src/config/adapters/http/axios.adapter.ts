import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Options {
    baseUrl: string;
    params?: Record<string, string>
    headers?: Record<string, string>
}

export class AxiosAdapter implements HttpAdapter {
    private axiosInstance: AxiosInstance;


    constructor(options: Options) {
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            params: options.params,
            headers: options.headers
        })

    }

    async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
        let interceptorId: number | undefined;

        try {

            interceptorId = this.axiosInstance.interceptors.request.use(config => {
                config.params = { ...config.params, ...options };
                return config;
            });

            const { data } = await this.axiosInstance.get<T>(url, options)

            return data;
        } catch (error) {
            throw new Error(`error, fetching get: ${url}`)
        }
        finally {
            if (interceptorId !== undefined) {
                this.axiosInstance.interceptors.request.eject(interceptorId);
            }

        }
    }

    async post<T>(url: string, options?: Record<string, unknown>): Promise<T> {
        let interceptorId: number | undefined;

        try {

            interceptorId = this.axiosInstance.interceptors.request.use(config => {
                config.params = { ...config.params, ...options };
                return config;
            });

            const { data } = await this.axiosInstance.post<T>(url, options)

            return data;
        } catch (error) {
            throw new Error(`error, fetching post: ${url}`)
        }
        finally {
            if (interceptorId !== undefined) {
                this.axiosInstance.interceptors.request.eject(interceptorId);
            }

        }
    }

}