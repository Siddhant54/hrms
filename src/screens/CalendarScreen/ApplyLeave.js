import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import ButtonBottom from '../../components/Button';
import InputField from '../../components/InputComp';
import TextField from '../../components/InputComp/TextField';

const ApplyLeave = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header title={'Apply Leave'} backButton={true} />
            <View style={styles.container}>
                <Text style={{ fontSize: 13 }}><Text style={{ fontWeight: 500 }}>Reporting Manager: </Text>Pravin Gupta(Product Manager)</Text>
                <ScrollView>
                    <View>
                        <InputField
                            label={"Leave Type"}
                            placeholder={"Half Day(First Half)"}
                        // value={email}
                        // onChangeText={setEmail}
                        />
                        <InputField
                            label={"From"}
                            placeholder={"01/11/2024"}
                            // value={email}
                            // onChangeText={setEmail}
                            calendar
                        />
                        <InputField
                            label={"To"}
                            placeholder={"01/11/2024"}
                            // value={email}
                            // onChangeText={setEmail}
                            calendar
                        />
                        <TextField placeholder={"Remarks"}/>
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
                </ScrollView>
                <View style={{ paddingHorizontal: 10 }}>
                    <ButtonBottom label={"Apply Now"} destination={"LeaveStatus"} />
                </View>
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
    tab: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
    },
    activeTab: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: "#6EEFB9"
    },

});

export default ApplyLeave;
