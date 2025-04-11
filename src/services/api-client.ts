import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '1ca2c5146d074e96b42c64523aba9f46',
    }
});

