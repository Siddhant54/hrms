import React, { useState } from 'react';
import { Animated, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import Icon from "react-native-vector-icons/Ionicons";
import profileImage from "../../assets/images/profileImage.png";
import NotificationComponent from '../../components/Notification';
const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;
const ProfileScreen = () => {
    const cardData = [
        { id: '1', icon: require('../../assets/homeIcons/attleave.png'), text: 'Attendance & Leaves' },
        { id: '4', icon: require('../../assets/homeIcons/news.png'), text: 'Regularization' },
        { id: '9', icon: require('../../assets/homeIcons/help.png'), text: 'IT Support' },
        { id: '9', icon: require('../../assets/homeIcons/help.png'), text: 'Leaves' },
    ];
    const [scaleValue] = useState(new Animated.Value(1));
    const handlePressIn = () => {
        Animated.timing(scaleValue, {
            toValue: 0.95, // Scale down slightly
            duration: 500,
            useNativeDriver: true,
        }).start();
    };
    const handlePressOut = () => {
        Animated.timing(scaleValue, {
            toValue: 1, // Restore scale
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const renderCard = ({ item }) => (
        <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
           <TouchableOpacity
    activeOpacity={0.8}
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}
    style={styles.cardContent}
>
    {/* Replace Icon with Image */}
    <Image
                source={item.icon}
                style={styles.cardImage}
            />
    <Text style={styles.cardText}>{item.text}</Text>
</TouchableOpacity>
        </Animated.View>
    );
    return (
        <View style={{ flex: 1 }}>
            <Header title={'HRMS'} backButton={false} />
            <View style={styles.container}>
            <View style={styles.profileContainer}>
                    <Image source={profileImage} style={styles.profileImage} />
                    <View style={styles.profileDetails}>
                        <Text style={styles.profileName}>HI,JOHN TAYLOR </Text>
                        <Text style={styles.profileID}>ID: MZ001234</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationIcon}>
                        <Icon name={"notifications-outline"} color="white" size={22} />
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                        <View style={{backgroundColor:"#B3B3B3",height:42,color:'#000',borderRadius:10,padding:10}}>
                            <Text style={{color:"#fff"}}>Clock In</Text>
                        </View>
                        <View style={{flexDirection: 'row',justifyContent:"space-between",gap:10}}>
                            <Text style={{color:"#293646",fontSize:16}}>09:15 AM</Text>
                            <Text style={{color:"#293646",fontSize:16}}>-</Text>
                            <Text style={{color:"#293646",fontSize:16}}>00:00</Text>
                        </View>
                        <View style={{height:42,color:'#000',borderRadius:10,padding:10,borderColor:"#F61C0E",borderWidth:1}}>
                            <Text style={{color:"#F61C0E"}}>Clock In</Text>
                        </View>
                    </View>
                    <ScrollView horizontal={false}>
                <FlatList
                    data={cardData}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.gridContainer}
                    showsVerticalScrollIndicator={false}
                />
                </ScrollView>
            </View>
            <NotificationComponent/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
        marginTop: 10,
         // Reduced gap between Header and the first component
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileDetails: {
        flex: 1,
        marginLeft: 10,
    },
    profileName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileID: {
        fontSize: 14,
        color: 'gray',
    },
    notificationIcon: {
        padding: 5,
        backgroundColor: "black",
        borderRadius: 25,
    },
    containerClock: {
        flexDirection: 'row', // Aligns items in a row
        justifyContent: 'space-between', // Adds space between items
        padding: 10, // Container padding
        gap: 10, // Space between items
    },
    clockItem: {
        width: 90, // Hug width (90px)
        height: 42, // Hug height (42px)
        borderRadius: 10, // Border radius
        borderWidth: 1, // Border thickness
        borderColor: '#000', // Border color (default black, customize as needed)
        padding: 10, // Inner padding
        justifyContent: 'center', // Vertical alignment
        alignItems: 'center', // Horizontal alignment
    },
    infoContainer: {
        flexDirection: 'row', // Align time, separator, and duration in a row
        justifyContent: 'center', // Center alignment
        alignItems: 'center', // Align items vertically in the center
    },
    label: {
        fontSize: 14, // Customize font size
        fontWeight: 'bold', // Optional bold styling
        marginBottom: 5, // Space between label and content
    },
    time: {
        fontSize: 12,
    },
    separator: {
        marginHorizontal: 5, // Space around the separator
        fontSize: 12,
    },
    duration: {
        fontSize: 12,
    },
    rowContainer: {
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'space-between', // Add spacing between items
        alignItems: 'center', // Vertically align items in the center
        padding: 10, // Padding for the container
        gap: 10, // Space between child items
        borderTopWidth: 1, // Border thickness for the top
        borderBottomWidth: 1, // Border thickness for the bottom
        borderColor: '#B3B3B3', // Border color
        borderRadius: 0, // No rounded corners (optional)
    },
    card: {
        width: CARD_WIDTH, // Dynamically calculated width
        height: 71, // Fixed height as per Figma
        margin: 8, // Gap between cards
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, // Shadow on Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    cardContent: {
        alignItems: 'center',
        justifyContent:"center"
    },
    cardText: {
        marginTop:5,
        fontSize: 11,
        color: '#333',
    },
    cardImage: {
        width: 40, // Adjust width as needed
        height: 40, // Adjust height as needed
        resizeMode: 'contain', // Ensure the image fits within the bounds
    },
});

export default ProfileScreen;
