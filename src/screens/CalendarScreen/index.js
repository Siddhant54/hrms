import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import ButtonBottom from '../../components/Button';

const CalendarScreen = () => {
    const [activeTab, setActiveTab] = useState('Annual Leave');
    return (
        <View style={{ flex: 1 }}>
            <Header title={'Leave Summary'} backButton={true} />
            <View style={styles.container}>
                <View
                    style={{
                        flexDirection: 'row',
                        borderWidth: 1,
                        padding: 3,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 5,
                    }}>
                         <TouchableOpacity
                        style={[{
                            flex: 1,
                            padding: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            marginHorizontal: 4,
                            borderRadius: 5,
                        },
                        { backgroundColor: activeTab === 'Annual Leave' ? '#6EEFB9' : 'white' }
                    ]}
                        onPress={() => setActiveTab('Annual Leave')}
                        >
                        <Text>Annual Leave</Text>
                        </TouchableOpacity>
                    <TouchableOpacity
                        style={[{
                            flex: 1,
                            padding: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            marginHorizontal: 4,
                            borderRadius: 5,
                        },
                        { backgroundColor: activeTab === 'Casual Leave' ? '#6EEFB9' : 'white' }
                    ]}
                        onPress={() => setActiveTab('Casual Leave')}
                        >
                        <Text>Casual Leave</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[{
                            flex: 1,
                            padding: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            marginHorizontal: 4,
                            borderRadius: 5,
                        },
                        { backgroundColor: activeTab === 'Sick Leave' ? '#6EEFB9' : 'white' }
                    ]}
                        onPress={() => setActiveTab('Sick Leave')}
                        >
                        <Text>Sick Leave</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={false}>
                <View
                    style={{
                        flexDirection: 'column',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop:20,
                        backgroundColor:"#C6FFA7"
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderColor: '#000',
                            paddingVertical: 10,
                        }}>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                            <Text>Entitlement</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                            <Text>24</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderColor: '#000',
                            paddingVertical: 10,
                        }}>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                            <Text>Carry Forward</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                            <Text>0</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingVertical: 10,
                        }}>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                            <Text>Earned</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                            <Text>24</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 10, // Reduce this to control the gap between tables
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderColor: '#ccc',
                        }}>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical:10,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderRightWidth: 1,
                                borderColor: '#ccc',
                            }}>
                            <Text>Token Leave</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                            <Text>0</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                        }}>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderRightWidth: 1,
                                borderColor: '#ccc',
                            }}>
                            <Text>Balance</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                            <Text>24</Text>
                        </View>
                    </View>
                </View>
                <Text style={{marginTop:10,color:"#293646"}}>06/06/2023 - 05/06/2024</Text>
                </ScrollView>
            </View>
            <View style={{paddingHorizontal:10}}>
            <ButtonBottom  label={"Apply Leave"} destination={"ApplyLeave"} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
        marginTop: 10, // Reduced gap between Header and the first component
    },
    tab:{
        flexDirection: 'row',
        borderWidth: 1,
        padding: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
    },
    activeTab:{
        flexDirection: 'row',
        borderWidth: 1,
        padding: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor:"#6EEFB9"
    },

});

export default CalendarScreen;
