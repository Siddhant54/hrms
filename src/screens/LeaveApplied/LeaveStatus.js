import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import ButtonBottom from '../../components/Button';

const LeaveStatus = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title={'Leave Status'} backButton={true} />
      <View style={styles.container}>
        <Text style={{ fontSize: 13 }}>
          <Text style={{ fontWeight: '500' }}>Reporting Manager: </Text>
          Pravin Gupta (Product Manager)
        </Text>

        <ScrollView style={styles.scrollView}>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={[styles.tableRow, styles.headerRow]}>
            <Text style={[styles.tableCell, styles.headerText, {borderRightWidth:1}]}>Date</Text>
            <Text style={[styles.tableCell, styles.headerText, {borderRightWidth:1}]}>Leave Type</Text>
            <Text style={[styles.tableCell, styles.headerText, {  }]}>Status</Text>
            </View>

            {/* Table Rows */}
            {[
              { date: '25/10/2024', leaveType: 'Half Day(First Half)', status: 'Pending' },
              { date: '26/10/2024', leaveType: 'Full Day', status: 'Approved' },
              { date: '27/10/2024', leaveType: 'Half Day(Second Half)', status: 'Rejected' },
              { date: '28/10/2024', leaveType: 'Full Day', status: 'Pending' },
              { date: '29/10/2024', leaveType: 'Full Day', status: 'Approved' },
            ].map((row, index) => (
              <View key={index} style={[styles.tableRow, index % 2 === 0 && styles.evenRow]}>
                <Text style={[styles.tableCell, styles.cellText, { borderRightWidth: 1, borderRightColor: '#B9B9B9' }]}>{row.date}</Text>
                <Text style={[styles.tableCell, styles.cellText, { borderRightWidth: 1, borderRightColor: '#B9B9B9' }]}>{row.leaveType}</Text>
                <Text style={[styles.tableCell, styles.cellText, styles.statusText(row.status)]}>{row.status}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={{ paddingHorizontal: 10 }}>
                    <ButtonBottom label={"Apply Leave"} destination={"Attendance"} />
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

export default LeaveStatus;
