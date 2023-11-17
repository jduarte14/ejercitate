import React, { useState, useEffect } from 'react';
import BottomBar from './../bottomBar';
import InstructorSearchTrigger from './instructorSearchField';

const InstructorsCatalog = ({ navigation }) => {
  const [instructors, setInstructorsData] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const getInstructorUrl = `https://ejercitatebackend-production.up.railway.app/api/instructors/`;
        const response = await fetch(getInstructorUrl);
        if (response.ok) {
          const data = await response.json();
          const instructorData = data.instructors;
          setInstructorsData(instructorData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <>
      <InstructorSearchTrigger instructors={instructors} />
      <BottomBar navigation={navigation} instructors={instructors} />
    </>
  );
};



export default InstructorsCatalog;
