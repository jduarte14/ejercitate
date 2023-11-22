import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const BottomBar = ({navigation}) => {
    return (
        <>
            <View style={styles.bottomBarRow} >
                <Pressable style={styles.bottomBarIconContainer}  onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/sports/weight_icon.png')} />
                    <Text style={styles.bottomBarText}>
                        Gyms
                    </Text>
                </Pressable>
                <Pressable style={styles.bottomBarIconContainer} onPress={() => navigation.navigate('Instructores')}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/entrenador-card.png')} />
                    <Text style={styles.bottomBarText}>
                        Instructors
                    </Text>
                </Pressable>
                <Pressable style={styles.bottomBarIconContainer} onPress={() => navigation.navigate('Stores')}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/cart.png')} />
                    <Text style={styles.bottomBarText}>
                        Stores
                    </Text>
                </Pressable>
                <Pressable style={styles.bottomBarIconContainer} onPress={() => navigation.navigate('Account')}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/user.png')} />
                    <Text style={styles.bottomBarText}>
                        Account
                    </Text>
                </Pressable>
            </View>
        </>
    )
}

let gray = "#f6f6f6";
let slate = "#0f172a";

const styles = StyleSheet.create({
    bottomBarRow:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"white",
        paddingLeft:35,
        paddingRight:35,
        paddingBottom:10,
        borderTopWidth:1,
        borderColor:gray,
    },
    bottomBarText :{
        color:slate,
        fontWeight:"bold",
        fontSize:14,
        paddingTop:5,
    },
    bottomBarIcon :{
        width:35,
        height:35,
    },
    bottomBarIconContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        paddingTop:10,
    },
})

export default BottomBar;