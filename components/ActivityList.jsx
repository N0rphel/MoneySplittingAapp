import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ActivityList() {
    //in future cases, the activityList will be objects and should be passed as a prop
  const activityList = {
    user1: {
      name: 'Jimpa Jamtsho',
      amount: 255,
      type: 'expenditure',
    },
    user2: {
      name: 'Pralad Mishra',
      amount: 255,
      type: 'owns',
    },
    user3: {
      name: 'Jigme Sherab Phuntsho',
      amount: 255,
      type: 'owns',
    },
    user4: {
      name: 'Jigme Wangyle',
      amount: 255,
      type: 'expenditure',
    },
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: '500' }}>Activity</Text>
      <View style={styles.listContainer}>
        {Object.keys(activityList).map((key) => {
          const { name, amount, type } = activityList[key];
          const textColor = type === 'expenditure' ? 'red' : 'green';
          const sign = type === 'expenditure' ? '-' : '+';

          return (
            <View key={key} style={styles.activityCard}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'red',
                  borderRadius: 7,
                }}
              />
              <View style={styles.nameContainer}>
                <Text style={styles.customText}> {name} </Text>
              </View>
              <Text style={{ color: textColor,fontWeight:500, fontSize: 15 }}>
                {sign} Nu. {amount} /-
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
  },
  listContainer: {
    flexDirection: 'column',
    padding: 5,
    gap: 5,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  nameContainer: {
    paddingLeft:20,
    flex: 1, // To allow the name text to take up available space
  },
  customText: {
    fontSize: 15,
    fontWeight: '500'
  },
});

export default ActivityList;
