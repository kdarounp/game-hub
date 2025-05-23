// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { AxiosRequestConfig, AxiosResponse, CanceledError } from "axios";




export interface FetchResponse <T> {
    count: number;
    next: string | null;
    results: T[];
    
}

// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
//     const [data, setData] = useState<T[]>([]);
//     const [error, setError] = useState("");
//     const [isloading, setIsLoading] = useState(false);
  
//     useEffect(() => {
//     const controller = new AbortController();
//     setIsLoading(true);
    
       

//       apiClient
//         .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
//         .then((res) => { 
//           setData(res.data.results);
//           setIsLoading(false);
//         })
//         .catch((err) => {
//             if (err instanceof CanceledError) return;
//             setError(err.message);
//             setIsLoading(false);
//           });
        

//         return () => {
//             controller.abort();
//         }
//     }, deps ? [...deps] : []);

//     return { data, error, isloading };
// }

// export default useData