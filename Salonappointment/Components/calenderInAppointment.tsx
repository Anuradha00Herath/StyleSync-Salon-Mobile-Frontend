import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface CalendarProps {
  currentDate: Date;
}

const CalenderExpand: React.FC<CalendarProps> = () => {

  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);

  const customTheme = {
    calendarBackground: '#rgba(0,0,0,0.5)',
    textDayFontSize: 12, // Font size for day labels
    textMonthFontSize: 14, // Font size for month title
    textDayHeaderFontSize: 14,
    textDayStyle: {
      color: '#FFFFFF', // Font color for all text elements
      margin: 2
    },
    monthTextColor: '#FFFFFF', // Change this color to the desired color for month and year text
    arrowColor: '#FFFFFF',
  };

  return (
    <View style={{
      borderRadius: 10,
      overflow: 'hidden'
    }}>
       <Calendar
         theme={customTheme}
         onDayPress={(day) => {
            console.log('selected day', day);
            setSelectedDate(day.dateString); // Update selected date
          }}
         monthFormat={'yyyy MMMM'}
         hideArrows={false}
         hideExtraDays={true}
         markedDates={{
           [selectedDate]: {
            selected: true,
            disableTouchEvent: true, 
             selectedColor: 'white', // Transparent background color
             selectedTextColor: 'black',
           }
         }}
       />
    </View>
  );
};

export default CalenderExpand;
