import React, { useRef, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Animated } from 'react-native';

interface WarnPopUpProps {
    title?: string;
    message?: string;
    firstButton?: () => void;
    secondButton?: () => void;
}

const WarnPopUp: React.FC<WarnPopUpProps> = ({ title, message, firstButton, secondButton }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
            <View style={styles.ppContainer}>
                {title ? <Text style={styles.title}>{title}</Text> : null}
                {message ? <Text style={styles.message}>{message}</Text> : null}
                <View style={styles.buttonRow}>
                    {firstButton ? (
                        <TouchableOpacity style={styles.successButton} onPress={firstButton}>
                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    ) : null}
                    {secondButton ? (
                        <TouchableOpacity style={styles.warnButton} onPress={secondButton}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>
        </Animated.View>
    );
};
let slate = "#0f172a";
let red = "#ef4444";
let green = "#84cc16";
const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ppContainer: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: slate,
        textAlign: "center",
    },
    warnButton: {
        borderRadius: 10,
        backgroundColor: red,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    messageContainer: {
        marginHorizontal: 50,
        paddingHorizontal: 30,
    },
    message: {
        fontSize: 18,
        textAlign: "center",
        lineHeight: 25,
        paddingVertical:20,
    },
    successButton: {
        borderRadius: 10,
        backgroundColor: green,
        paddingVertical: 8,
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
    },
});

export default WarnPopUp;