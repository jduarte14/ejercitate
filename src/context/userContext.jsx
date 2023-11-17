import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {

    const [user, setUsers] = useState(null);

    const getUsers = async () => {
        try {
            const response = await fetch("https://ejercitatebackend-production.up.railway.app/api/user");
            const data = await response.json();
            if (data.status === "success") {
                setInstructors(data.instructors);
            }
        }
        catch (error) {
            console.error("There was an error on the request");
        }
    }
    const getSingleUser = async (id) => {
        try {
            const response = await fetch(`https://ejercitatebackend-production.up.railway.app/auth/user/${id}`);
            const data = await response.json();
            if (data.response === "success") {
                return data;
            }
        }
        catch (error) {
            console.error("There was an error on the request");
        }
    }
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <UserContext.Provider value={{ user, setUsers, getSingleUser }}>{children}</UserContext.Provider>
    )
}