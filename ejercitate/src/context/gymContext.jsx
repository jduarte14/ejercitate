import { createContext, useContext, useState, useEffect } from 'react';

const GymContext = createContext();


export const useGymContext = () => {
    return useContext(GymContext);
}

export const GymProvider = ({ children }) => {

    const [gyms, setGyms] = useState();

    const handleGyms = async () => {
        try {
            const response = await fetch("https://ejercitatebackend-production.up.railway.app/api/gyms");
            const data = await response.json();
            setGyms(data.gyms);
        }
        catch (error) {
            console.error("There was an error on the request");
        }
    }

    useEffect(() => {
        handleGyms();
    }, [])
    return (
        <GymContext.Provider value={{ gyms, setGyms }}>{children}</GymContext.Provider>
    )
}