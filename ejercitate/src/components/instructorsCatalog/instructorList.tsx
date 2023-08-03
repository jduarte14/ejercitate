import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import InstructorPage from './../instructorPage';

const InstructorList = ({ instructors, searchValue }) => {
  const [filteredInstructors, setFilteredInstructors] = useState([]);
  const [instructorPage, setInstructorPage] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const showInstructorPage = (instructorId) => {
    setSelectedInstructor(instructors.find(instructor => instructor._id === instructorId));
    setInstructorPage(true);
  }

  const hideInstructorPage = () => {
    setInstructorPage(false);
  }

  useEffect(() => {
    const filtered = instructors.filter(instructor =>
      instructor.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredInstructors(filtered);
  }, [instructors, searchValue]);

  return (
    <View style={instructorStyle.container}>
      {filteredInstructors.length > 0 ? (
        filteredInstructors.map((instructor, index) => {
          const { name, phone, avatar, _id } = instructor;
          return (
            <View style={instructorStyle.instructorRowContainer} key={index}>
              <Image source={{ uri: avatar }} style={instructorStyle.instructorAvatar} />
              <View style={instructorStyle.instructorInfoRow}>
                <Text style={instructorStyle.instructorText}>{name}</Text>
                <Text style={instructorStyle.instructorText}>{phone}</Text>
              </View>
              <Text style={instructorStyle.instructorShowText} onPress={() => showInstructorPage(_id)}>Ver mas</Text>
            </View>
          );
        })
      ) : (
        <Text style={instructorStyle.charginText}>Cargando instructores</Text>
      )}
      {instructorPage ? <InstructorPage hideInstructorPage={hideInstructorPage} instructor={selectedInstructor} /> : null}
    </View>
  )
}

let gray = "#f6f6f6";
let slate = "#0f172a";

const instructorStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    instructorRowContainer: {
        display: "flex",
        paddingRight: 5,
        flexDirection: "row",
        paddingLeft: 20,
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center",
        backgroundColor: gray,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: gray,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    instructorText: {
        fontWeight: "bold",
        fontSize: 18,
        color: slate,
    },
    instructorShowText: {
        fontWeight: "bold",
        fontSize: 15,
        color: slate,
        borderColor: slate,
        borderRadius: 10,
        borderWidth: 1.5,
        padding: 10,
        textAlign: "center",
    },
    charginText: {
        fontWeight: "bold",
        fontSize: 20,
        color: slate,
        paddingLeft: 45,
        paddingTop:20,
    },
    instructorAvatar: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    instructorInfoRow: {
        paddingLeft: 13,
        width: 150,
    }
})

export default InstructorList