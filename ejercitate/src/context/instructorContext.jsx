import { createContext, useContext, useState, useEffect } from 'react';

const InstructorContext = createContext();

export const useInstructorContext = () => {
    return useContext(InstructorContext);
}

export const InstructorProvider = ({ children }) => {

    const [instructors, setInstructors] = useState(null);

    const handleInstructors = async () => {
        try {
            const response = await fetch("https://ejercitatebackend-production.up.railway.app/api/instructors");
            const data = await response.json();
            if (data.status === "success") {
                setInstructors(data.instructors);
            }
        }
        catch (error) {
            console.error("There was an error on the request");
        }
    }
    const handleSingleInstructor = async (id) => {
        try {
            const response = await fetch(`https://ejercitatebackend-production.up.railway.app/auth/user/${id}`);
            const data = await response.json();
           if(data.response === "success") {
                return data;
           }
        }
        catch (error) {
            console.error("There was an error on the request");
        }
    }
    useEffect(() => {
        handleInstructors();
    }, [])

    return (
        <InstructorContext.Provider value={{ instructors, setInstructors, handleSingleInstructor }}>{children}</InstructorContext.Provider>
    )
}