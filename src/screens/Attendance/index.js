import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import ProfileIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Attendance = () => {
    const navigation=useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <Header title={'Attendance'} backButton={true} />
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text style={{ fontSize: 13, paddingHorizontal: 16 }}>World Trade Center, Pune, Maharashtra, India - 411014</Text>
                    <Image
                        source={require('../../assets/images/map.png')} // Replace with your image URL or require your local image
                        style={styles.image}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <View style={{ backgroundColor: "#3E7407", height: 42, color: '#000', borderRadius: 10, padding: 10 }}>
                        <Text style={{ color: "#fff" }}>Clock In</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", gap: 10 }}>
                        <Text style={{ color: "#293646", fontSize: 32, fontWeight: 300 }}>09:15 AM</Text>
                    </View>
                    <View style={{ height: 42, color: '#000', borderRadius: 10, padding: 10, borderColor: "#B3B3B3", borderWidth: 1 }}>
                        <Text style={{ color: "#B3B3B3" }}>Clock Out</Text>
                    </View>
                </View>
                <Text style={{
                    fontSize: 13, borderBottomWidth: 1, // Border thickness for the bottom
                    borderColor: '#B3B3B3', paddingBottom: 10,
                    paddingHorizontal: 16,
                }}>Nov 01, 2024-Thursday</Text>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>Late: 00</Text>
                    <Text style={styles.timeText}>Early: 00</Text>
                    <Text style={styles.timeText}>OverTime: 00</Text>
                </View>
                <View style={{ paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
                    <ProfileIcon name="clock" color={"black"} size={14} />
                    <TouchableOpacity onPress={()=>navigation.navigate("AttendanceHistory")}>
                    <Text style={{ textDecorationLine: "underline", color: "#184CCF", marginLeft: 5 }}>
                        Attendance History
                    </Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
        </View>
    )
}

export default Attendance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 16,
        justifyContent: 'flex-start',
        marginTop: 10,
         borderBottomWidth:1,
        borderColor: '#B3B3B3',
    },
    imageContainer: {
        paddingVertical: 10,
        borderTopWidth: 1,
        // borderBottomWidth:1,
        borderColor: '#B3B3B3',
    },
    image: {
        width: "100%",
        height: 98,
        marginTop: 5
    },
    rowContainer: {
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'space-between', // Add spacing between items
        alignItems: 'center', // Vertically align items in the center
        padding: 10, // Padding for the container
        gap: 10, // Space between child items
        borderTopWidth: 1, // Border thickness for the top
        borderColor: '#B3B3B3', // Border color
        borderRadius: 0,
        marginTop: 10 // No rounded corners (optional)
    },
    timeContainer: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    timeText: {
        marginRight: 10,
        textAlign: "start", // Center the text
        flex: 1, // Make each text take equal space
        fontSize: 13,
        color: "#4D4D4D",
        fontWeight: 400
    }
});
