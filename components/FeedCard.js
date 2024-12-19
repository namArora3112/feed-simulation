import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import Icon from '@react-native-vector-icons/ionicons';
const FeedCard = ({
    companyName, 
    designation,
    userName,
    actionPerformed,
    userAction,
    color
}) => {
  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={{ borderBottomWidth: 1, borderColor: '#cccacc'}}>
      <View style={styles.header}>
        <View style={[styles.logo,{backgroundColor: color}]}>
          <Text style={styles.logoText}>{companyName.charAt(0)}</Text>
        </View>
        <Text style={styles.title}>{companyName}</Text>
        <View style={styles.intentTag}>
        <Icon name="analytics-outline" size={20} color="#007aff" />
        <Text style={styles.intentText}>High product intent</Text>
        </View>
    
      <Icon name="star" size={20} color="#b8860b" style={{marginLeft: 4}} />


      </View>
      </View>
    

      {/* Activities Section */}
      <View style={styles.activities}>
      <Text style={{fontWeight: '400', fontSize: 12, 
marginBottom: 12,
color: "#5d5e5c"
      }}>Latest activities</Text> 

        <View style={[styles.activityItem,{alignItems: 'flex-start'}]}>
          <Icon name="download-outline" size={26} color="black"  />

          <Text style={styles.activityText}>
       
            <Text style={styles.boldText}>{userName}</Text> {userAction}{' '}
            <Text
              style={[styles.linkText]}
              onPress={() =>
                Linking.openURL('https://example.com/predicting-data')
              }
            >
              "Predicting the future is what data was made for"
            </Text>
            <Text style={[styles.subText]}>{'\n'}{designation}{'\n'}Just now</Text>
          </Text>
        </View>
      

        <View style={styles.activityItem}>
        <Icon name="pie-chart-outline" size={22} color="black"  />
        <View>
        <Text style={styles.activityText}>
            Detected <Text style={styles.highlightText}>high product intent</Text>
          </Text>
          <Text style={[styles.subText,{marginLeft: 8, fontSize: 12}]}>{actionPerformed}</Text>

        </View>
        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    //borderRadius: 8,
    padding: 16,
    marginBottom: 16,
   // margin: 16,
    //elevation: 4,
    shadowColor: '#000',
    //shadowOpacity: 0.1,
    //shadowRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    backgroundColor: '#fbbf24',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color:'#1d6be0',
    flex: 1,
  },
  intentTag: {
    flexDirection: 'row',
    alignItems: 'center',
   // backgroundColor: '#f0fff4',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  intentText: {
    color: 'green',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  star: {
    marginLeft: 8,
  },
  activities: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  activityItem: {
    flexDirection: 'row',
    //alignItems: 'center',
    marginBottom: 6,
  },
  activityText: {
    marginLeft: 8,
    flexShrink: 1,
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'bold',
  },
  linkText: {
    color: '#2563eb',
 //   textDecorationLine: 'underline',
 
 lineHeight: 20
  },
  highlightText: {
    color: 'green',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: '#666',
    //marginLeft: 28,
  },
});

export default FeedCard;
