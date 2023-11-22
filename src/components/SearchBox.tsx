import { View, TextInput, Pressable, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const SearchBox = () => {


    return (
        <TouchableOpacity style={styles.searchContainer}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search for a gym"
                placeholderTextColor="black"

            />
            <Pressable style={styles.searchBtn} >
                <Text style={styles.searchText}>Search</Text>
            </Pressable>
        </TouchableOpacity>
    )
}
let gray = "#f6f6f6";
let slate = "#0f172a";
const styles = StyleSheet.create({
    searchBtn: {
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    searchText: {
        fontWeight: "bold",
        color: "white",
    },
    searchBar: {
        height: 40,
        borderWidth: 2,
        borderColor: slate,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        width: screenWidth/1.3,
        paddingLeft: 20,
        paddingRight: 20,
        color: "black",
    },
    searchContainer: {
        backgroundColor: gray,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: 70,
    },
})

export default SearchBox;