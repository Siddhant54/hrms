import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native';

const NotificationComponent = () => {
  const [visible, setVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  // Define the animated value for the carousel's sliding
  const scrollX = new Animated.Value(0);

  const hideNotification = () => {
    setVisible(false);
  };

  const descriptions = [
    'This feature will be useful for tracking your payslips.',
    'This feature will be useful for tracking your payslips.',
    'This feature will be useful for tracking your payslips.',
  ];

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newPage = Math.floor(contentOffsetX / 350); // width of each carousel item
    setCurrentPage(newPage);
  };

  if (!visible) return null;

  return (
    <View style={styles.notificationContainer}>
      {/* Cross Icon */}
      <TouchableOpacity onPress={hideNotification} style={styles.crossIcon}>
        <Text style={{ fontSize: 16,color:"#fff" }}>✕</Text>
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>New Feature</Text>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleScrollEnd}
          contentContainerStyle={styles.scrollViewContent}
        >
          {descriptions.map((desc, index) => (
            <View key={index} style={styles.carouselItem}>
              <Text style={styles.description}>{desc}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Carousel Indicators */}
        <View style={styles.indicatorsContainer}>
          {descriptions.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentPage ? { backgroundColor: '#000' } : { backgroundColor: '#ccc' },
              ]}
            ></View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    width: "90%",
    height: 96,
    position: 'absolute',
    bottom: 20, // Adjust bottom positioning
    left: 20,
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderTopWidth: 1,
    // justifyContent: 'space-between',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor:'#3A2174'
  },
  crossIcon: {
    position: 'absolute',
    top: 8,
    right: 16,
  },
  title: {
    color:"white",
    fontSize: 16,
    fontWeight: 'bold',
  },
  carouselItem: {
    width: 350, // Fixed width for each carousel item
    alignItems: 'flex-start', // Align the text to the start
     // Add padding on the sides for better alignment
  },
  description: {
    fontSize: 11,
    textAlign: 'left',
    color:"white",
     // Ensure text is aligned to the left
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  indicator: {
    width: 16,
    height: 3,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
});

export default NotificationComponent;
