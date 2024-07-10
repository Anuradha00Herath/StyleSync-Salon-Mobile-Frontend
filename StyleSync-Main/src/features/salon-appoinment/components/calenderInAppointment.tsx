import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface CalendarProps {
 currentDate: Date;
 selectedDate:string|undefined;
 setSelectedDate:(date: string) => void;
}


const CalenderExpand: React.FC<CalendarProps> = ({selectedDate,setSelectedDate}) => {

  //const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);
  

  const customTheme = {
    calendarBackground: 'rgba(10,10,10,0.5)',
    textDayFontSize: 12, 
    textMonthFontSize: 14, 
    textDayHeaderFontSize: 14,
    textDayStyle: {
      color: '#FDFDFD', 
      margin: 2
    },
    monthTextColor: '#FDFDFD', 
    arrowColor: '#FDFDFD',
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
            setSelectedDate(day.dateString); 
           
          }}
         monthFormat={'yyyy MMMM'}
         hideArrows={false}
         hideExtraDays={true}
         markedDates={{
           [selectedDate]: {
            selected: true,
            disableTouchEvent: true, 
             selectedColor: 'white',
             selectedTextColor: 'black',
           }
         }}
       />
    </View>
  );
};

export default CalenderExpand;