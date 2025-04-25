import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../hooks/useData";

const axiosInstance =  axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '1ca2c5146d074e96b42c64523aba9f46',
    }
});

class ApiClient<T> {
     endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(response => response.data);
    }
}

export default ApiClient;

