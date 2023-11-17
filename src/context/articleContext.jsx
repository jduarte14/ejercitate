import { createContext, useContext } from 'react';

const articlesContext = createContext();

export const useArticlesContext = () => {
    return useContext(articlesContext);
}


export const ArticlesProvider = ({ children }) => {

    const [articles, setArticles] = useState();

    const handleArticles = async () => {
        try {
            const response = await fetch("https://ejercitatebackend-production.up.railway.app/api/articles");
            const data = await response.json();
            setGyms(data.articles);
        }
        catch (error) {
            console.error("There was an error on the request");
        }
    }

    useEffect(() => {
        handleArticles();
    }, [])
    return (
        <GymContext.Provider value={{ articles, setArticles }}>{children}</GymContext.Provider>
    )
}