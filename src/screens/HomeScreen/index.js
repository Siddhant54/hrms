import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Animated, Dimensions, ScrollView } from 'react-native';
import Header from '../../components/Header';
import profileImage from "../../assets/images/profileImage.png";
import Icon from "react-native-vector-icons/Ionicons";
import ButtonBottom from '../../components/Button';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // Subtract padding and margin, divide for 2 columns

const HomeScreen = () => {
    // Sample data for cards
    const cardData = [
        { id: '1', icon: require('../../assets/homeIcons/attleave.png'), text: 'Attendance & Leaves' },
        { id: '2', icon: require('../../assets/homeIcons/payslip.png'), text: 'Payslip' },

        { id: '3', icon: require('../../assets/homeIcons/tax.png'), text: 'Income Tax' },

        { id: '4', icon: require('../../assets/homeIcons/news.png'), text: 'News' },

        { id: '5', icon: require('../../assets/homeIcons/team.png'), text: 'Team' },

        { id: '6', icon: require('../../assets/homeIcons/holidays.png'), text: 'Holidys' },
        { id: '7', icon: require('../../assets/homeIcons/job.png'), text: 'Job Openings' },
        { id: '8', icon: require('../../assets/homeIcons/help.png'), text: 'Help Desk' },
        { id: '9', icon: require('../../assets/homeIcons/help.png'), text: 'IT Support' },
        { id: '10', icon: require('../../assets/homeIcons/docs.png'), text: 'My Documents' },
    ];

    // Animation state for pressed card
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
                {/* Profile Section */}
                <View style={styles.profileContainer}>
                    <Image source={profileImage} style={styles.profileImage} />
                    <View style={styles.profileDetails}>
                        <Text style={styles.profileName}>John Doe</Text>
                        <Text style={styles.profileID}>ID: MZ001234</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationIcon}>
                        <Icon name={"notifications-outline"} color="white" size={22} />
                    </TouchableOpacity>
                </View>

                {/* Scrollable Content */}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
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

export default HomeScreen;
