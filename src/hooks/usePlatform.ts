import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
    }

const usePlatform = () => useData<Platform>('/platforms/lists/parents', {params: {page_size: 10}});

export default usePlatform;