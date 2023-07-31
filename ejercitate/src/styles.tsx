import { StyleSheet } from 'react-native';

let gray = "#f6f6f6";
let slate = "#0f172a";
let golden = "#FFD700";
let orange ="#f59e0b";
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
        flex: 1,
    },

    homeContainer: {
        backgroundColor: gray,
        flex: 1,
    },

    text: {
        fontWeight: "bold",
        color: "black",
        fontSize: 20,
    },

    whiteText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
    whiteSubText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 17,
        lineHeight:25,
    },
    whitePhoneText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 14,
    },
    instructorBtn: {
        backgroundColor: slate,
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: "white",
        marginLeft:30,
    },
    rowPressable: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
    },
    trainerAvatar: {
        width: 60,
        height: 60,
        marginRight: 10,
        marginLeft: 10,
        borderRadius:100,
        borderColor:'white',
        borderWidth:2,
    },
    upperTitle: {
        fontWeight: "bold",
        color: "black",
        fontSize: 30,
        paddingLeft: 10,
        textAlign: "center",
        paddingBottom: 20,
        paddingTop: 20,
    },

    title: {
        fontWeight: "bold",
        color: "black",
        fontSize: 20,
        paddingLeft: 10,
    },
    categoriesContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop:10,
    },
    category: {
        backgroundColor: "white",
        borderRadius: 5,
        width: 170,
        hegiht: 170,
        margin: 10,
        padding: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    categoryImg: {
        width: 50,
        height: 50,
        marginRight: 8,
        backgroundColor:gray,
        borderRadius:100,
        padding:5,
    },
    categoryText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
    },
    gymImages: {
        width: 220,
        height: 110,
    },
    gymName: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 5,
    },
    gymDescription: {
        color: "black",
        fontWeight: "bold",
        fontSize: 13,
        paddingBottom:15,
        width:200,
    },
    gymContainer: {
        height: 200,
        margin: 5,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        display:"flex",
    },
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
        width: 300,
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
    breadCumbText: {
        color: "black",
        fontWeight: "bold",


    },
    breadcumb: {
        padding: 5,
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    breadcumbPrice: {
        color: "black",
    },
    buttonsRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        zIndex: 3,
    },
    button: {
        backgroundColor: slate,
        marginRight: 10,
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,

    },
    singleButton: {
        backgroundColor: slate,
        marginRight: 10,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        width:300,

    }, buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
    modalContainer: {
        backgroundColor: gray,
        padding: 10,
    },
    modalWrapper: {
        flex: 1,
        height: 100,
    },
    modalImage: {
        width: 350,
        height: 250,
        marginRight: 5,
    },
    caracContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        padding: 10,
        background: "white",
    },
    caracText: {
        display: "flex",
        flexWrap: "wrap",
        lineHeight: 45,
        color: "white",
        fontWeight: "bold"
    },
    caracBlackText: {
        display: "flex",
        flexWrap: "wrap",
        lineHeight: 45,
        color: "black",
        fontWeight: "bold"
    },
    gymIcon: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    rowText: {
        display: "flex",
        paddingRight: 5,
        flexDirection: "row",
        backgroundColor: slate,
        borderRadius: 15,
        alignItems: "center",
        padding: 3,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    grayRowText: {
        display: "flex",
        paddingRight: 5,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        padding: 3,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    hourContainer: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
    },
    scheduleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: slate
    },
    scheduleNumber: {
        fontSize: 28,
        fontWeight: "bold",
        color: slate
    },
    scheduleSubNumber: {
        fontSize: 23,
        fontWeight: "bold",
        color: slate
    },
    scheduleSubText: {
        fontSize: 20,
        fontWeight: "bold",
        color: slate
    },
    directionText: {
        fontSize: 20,
        fontWeight: "bold",
        color: slate,
    },
    directionSubText: {
        fontSize: 17,
        fontWeight: "bold",
        color: slate,
    },
    directionInfo: {
        display: "flex",
        flexDirection: "row",
        paddingTop: 10,
    },
    gymTitle: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 10,
    },
    gymSubText: {
        color: "black",
        paddingLeft: 15,
        paddingBottom: 5,
        paddingTop: 8,
        fontWeight: "bold",
        fontSize: 20,
    },
    reviewText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
        lineHeight: 25,

    },
    reviewTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    },
    reviewContainer: {
        padding: 10,
        backgroundColor: slate,
        borderRadius: 10,
        marginTop: 10,
    },
    starsContainer: {
        display: "flex",
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5,
    },
    star: {
        width: 20,
        height: 20,
    },
    userReview: {
        borderBottomColor: "white",
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    reviewDate: {
        paddingTop: 10,
        color: "white",
    },
    priceDeal: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    checkoutPrice: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
    },
    instructorRow: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        padding: 10,
        backgroundColor: slate,
        borderRadius: 10,
        color: slate,
    },
    instructorContainer: {
        display: "flex",
        paddingRight: 5,
        flexDirection: "row",
        backgroundColor: golden,
        borderRadius: 15,
        alignItems: "center",
        padding: 3,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    singleInstructorContainer: {
        display: "flex",
        paddingRight: 5,
        flexDirection: "row",
        backgroundColor: slate,
        borderRadius: 15,
        alignItems: "center",
        justifyContent:"space-around",
        padding: 3,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        height: 90,
    },
    instructorRowContainer:{
        display: "flex",
        paddingRight: 5,
        flexDirection: "row",
        width:200,
    },
    instructorText: {
        display: "flex",
        flexWrap: "wrap",
        lineHeight: 45,
        color: slate,
        fontWeight: "bold"
    },
    searchTriggerContainer: {
        margin:10,
        borderRadius: 100,
    },
    searchTriggerWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#e5e7eb",
        borderRadius: 100,
        marginTop:30,
    },
    searchTriggerText: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 20,
    },

    loupeImage: {
        width: 28,
        height: 28,
        position:'absolute',
        left:30,

    },
    // Instructor Page
    instructorCard :{
        padding:10,
        backgroundColor:slate,
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        margin:5,
    },
    contactCard:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        paddingTop:20,
    },
    row:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    whiteInstructorTitle: {
        fontWeight: "bold",
        color: "white",
        fontSize: 25,
        paddingTop:5,
        paddingBottom:10,
    },
    whiteSubInstructorText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 17,
        lineHeight:25,
    },
    whiteContainer:{
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        marginTop:20,
    },
    grayContainer:{
        backgroundColor:gray,
        padding:10,
        borderRadius:10,
        marginTop:20,
    },
    orangeContainer:{
        backgroundColor:orange,
        padding:10,
        borderRadius:10,
        marginTop:20,
    },
    sportImage:{
        width:50,
        height:50,
        borderRadius:100,
    },
    sportTitle:{
        color:slate,
        fontWeight:"bold",
        fontSize:18,
        paddingLeft:10,
    },
    sportTitleWhite:{
        color:'white',
        fontWeight:"bold",
        fontSize:18,
        paddingLeft:10,
    },
    sportRow:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    contactIcon: {
        width: 30,
        height: 30,
    },
    instructorAvatarRow:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row"
    },
    coachAvatar:{
        width:100,
        height:100,
        margin:10,
        backgroundColor:"white",
        borderRadius:100,
        borderWidth:2,
        borderColor:"white"
    },
    // SearchHistory Component
    searchHistoryColumn :{
        display:"flex",
    },
    searchHistoryDirection:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        marginLeft:30,
        marginRight:30,
        paddingTop:10,
    },
    searchHistoryDirectionFirstChild:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        borderBottomWidth:1,
        borderColor:"#cbd5e1",
        marginLeft:30,
        marginRight:30,
        paddingBottom:10,
    },
    mapIconContainer:{
        backgroundColor:"#e5e7eb",
        borderRadius:100,
        padding:5,
        marginRight:30,
    },
    mapIcon:{
        width:28,
        height:28,
      
    },
    searchTriggerDirectionText:{
        color:slate,
        fontSize:20,
        textAlign:"left",
    },
    searchTriggerDirectionSubText:{
        color:slate,
        fontSize:13,
        textAlign:"left"
    },
    bottomBarRow:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"white",
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:10,
        marginTop:30,
        borderTopWidth:1,
        borderColor:gray,
    },
    bottomBarText :{
        color:slate,
        fontWeight:"bold",
        fontSize:18,
    },
    bottomBarIcon :{
        width:40,
        height:40,
    },
    bottomBarIconContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        paddingTop:10,
    },
    postsTitle:{
        color:slate,
        fontSize:20,
        paddingTop:10,
        fontWeight:"bold",
        paddingLeft:10,
        paddingBottom:5,
    }
});


export default styles;