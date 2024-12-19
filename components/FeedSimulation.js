import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import FeedCard from './FeedCard';
// import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

// Sample base data
const baseFeedData = [
  {
    id: 1,
    companyName: "Bodea",
    userName: "Raymond Noel",
    userAction: "opened email",
    designation: "Marketing analytics specialist",
    actionPerformed: "Just now",
    color: "#2f15d4",
    
  },
  {
    id: 2,
    companyName: "Wayne Enterprise",
    userName: "Whitney Wall",
    userAction: "registered for webinar",
    designation: "Principal Engineer",
    actionPerformed: "2 days ago",
    color: "#dce053"
  },
  {
    id: 3,
    companyName: "Globex Corporation",
    userName: "Samantha Doe",
    userAction: "changed group status",
    designation: "Business Analyst",
    actionPerformed: "5 hours ago",
    color: "#d1320f"
  },
];
function generateRandomHexColorWithContrast() {
    let color;
    let brightness;
  
    do {
      // Generate a random hex color
      color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  
      // Calculate brightness using the relative luminance formula
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
    } while (brightness > 0.8); // Adjust this threshold for better contrast with white text
  
    return color;
  }

// Generate additional random feed data
const generateFeedData = (startId, count = 10) => {
  const newData = [];
  for (let i = 0; i < count; i++) {
    newData.push({
      id: startId + i,
      companyName: "Company " + (startId + i),
      userName: "User " + (startId + i),
      userAction: "performed action",
      designation: "Designation " + (startId + i),
      actionPerformed: `${Math.floor(Math.random() * 10)} minutes ago`,
      color: generateRandomHexColorWithContrast()
    });
  }
  return newData;
};

const FeedSimulation = () => {
  const [feedData, setFeedData] = useState(baseFeedData);
  const [loading, setLoading] = useState(false);
  const [currentId, setCurrentId] = useState(baseFeedData.length + 1);

  // Load more data logic (simulating API call)
  const loadMoreData = () => {
    if (loading) return;
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const newData = generateFeedData(currentId, 10);
      setFeedData((prevData) => [...prevData, ...newData]);
      setCurrentId((prevId) => prevId + 10);
      setLoading(false);
    }, 1000);
  };

  // Render each feed item
  const renderItem = ({ item }) => (
    <FeedCard
    actionPerformed={item.actionPerformed}
    userName={item.userName}
    companyName={item.companyName}
    designation={item.designation}
    userAction={item.userAction}
    color={item.color}
    />
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>Feed Simulation</Text> */}
      <FlatList
      style={{marginTop: 16}}
        data={feedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.8}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#007aff" /> : null
        }

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7d3f5",
    
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  companyName: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  userName: {
    fontSize: 14,
    marginBottom: 4,
  },
  bold: {
    fontWeight: "bold",
  },
  designation: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#999",
  },
});

export default FeedSimulation;
