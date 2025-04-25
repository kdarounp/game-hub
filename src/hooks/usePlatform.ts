import usePlatforms from "./usePlatforms";

// logic to lookup a platform by id
const usePlatform = (id?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms?.results.find(
        (p) => p.id === id
      );
    

}

export default usePlatform;   