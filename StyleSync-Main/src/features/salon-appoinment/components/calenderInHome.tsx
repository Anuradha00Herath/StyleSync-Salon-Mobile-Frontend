import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import moment from 'moment';

interface CalendarProps {
  currentDate: string;
}

const Calendar: React.FC<CalendarProps> = ({ currentDate }) => {

  const data = [];
  const startOfWeek = moment(currentDate).startOf('week');
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 0; i < 7; i++) {
    const date = startOfWeek.clone().add(i, 'days');
    data.push({
      key: i.toString(),
      dayName: dayNames[i],
      date: date.format('D'),
      isCurrentDate: date.isSame(currentDate, 'day'),
    });
  }

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.headerText}>{moment().format('hh:mm A')}</Text>
        <Text style={styles.headerText}>{moment(currentDate).format('MMMM')}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.dateContainer}>
            <Text style={styles.dayNameText}>{item.dayName}</Text>
            <Text style={[styles.dateText, item.isCurrentDate && styles.currentDateText]}>{item.date}</Text>
            {item.isCurrentDate && <View style={styles.dot} />}
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(10, 10, 10, 0.6)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 14,
    color: 'white',
  },
  dateContainer: {
    alignItems: 'center',
    marginRight: 13,
    marginLeft:15,
    marginTop:12
  },
  dayNameText: {
    fontSize: 12,
    color: 'white',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 12,
    color: 'white',
  },
  currentDateText: {
    fontWeight: 'bold',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginTop: 5,
  },
});

export default Calendar;
