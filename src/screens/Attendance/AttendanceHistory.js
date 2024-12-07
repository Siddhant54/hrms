import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';


const AttendanceHistory = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title={'Attendance History'} backButton={true} />
      <View style={styles.container}>

        <ScrollView style={styles.scrollView}>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={[styles.tableRow, styles.headerRow]}>
            <Text style={[styles.tableCell, styles.headerText, {borderRightWidth:1}]}>Date</Text>
            <Text style={[styles.tableCell, styles.headerText, {borderRightWidth:1}]}>Clock in - out</Text>
            <Text style={[styles.tableCell, styles.headerText, {  }]}>Status</Text>
            </View>
            {[
  { date: '25/10/2024', leaveType: '08:30 AM - 06:00 PM', status: 'Early' },
  { date: '26/10/2024', leaveType: '09:00 AM - 06:00 PM', status: 'On Time' },
  { date: '27/10/2024', leaveType: '09:30 AM - 06:30 PM', status: 'Late' },
  { date: '28/10/2024', leaveType: '08:00 AM - 05:30 PM', status: 'Overtime' },
  { date: '29/10/2024', leaveType: '-', status: 'Full Day Leave' },
  { date: '31/10/2024', leaveType: '09:00 AM - 06:00 PM', status: 'On Time' },
  { date: '01/11/2024', leaveType: '08:30 AM - 05:30 PM', status: 'Late' },
 
].map((row, index) => (
              <View key={index} style={[styles.tableRow, index % 2 === 0 && styles.evenRow]}>
                <Text style={[styles.tableCell, styles.cellText, { borderRightWidth: 1, borderRightColor: '#B9B9B9' }]}>{row.date}</Text>
                <Text style={[styles.tableCell, styles.cellText, { borderRightWidth: 1, borderRightColor: '#B9B9B9' }]}>{row.leaveType}</Text>
                <Text style={[styles.tableCell, styles.cellText, styles.statusText(row.status)]}>{row.status}</Text>
              </View>
            ))}
          </View>
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
    marginTop: 10, // Reduced gap between Header and the first component
  },
  scrollView: {
    flex: 1,
  },
  table: {
    borderWidth: 1,
    borderColor: '#1A1A1A',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 16,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#B9B9B9',
    paddingHorizontal: 0, // Adjusted for no internal horizontal padding
  },
  headerRow: {
    backgroundColor: '#FFA36F',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    textAlign: 'center', // Center the text
    justifyContent: 'center',
    // borderLeftWidth: 1,
    borderLeftColor: '#B9B9B9',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cellText: {
    color: '#424242',
    fontSize: 13,
    textOverflow: 'ellipsis', // Prevents text overflow
    whiteSpace: 'nowrap',
  },
  statusText: (status) => {
    switch (status) {
      case 'Pending':
        return { color: '#C79530' };
      case 'Approved':
        return { color: '#3B7B0D' };
      case 'Rejected':
        return { color: '#DB4141' };
      default:
        return {};
    }
  },
  evenRow: {
    backgroundColor: '#F3F3F3',
  },
});

export default AttendanceHistory;
