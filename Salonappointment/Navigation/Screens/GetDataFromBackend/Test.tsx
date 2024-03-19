import React from 'react';
import { View, Text, FlatList } from 'react-native';
import mockAppointments from './AppointmentDetails';

const AppointmentList = () => {
  return (
    <View>
      <FlatList
        data={mockAppointments}
        renderItem={({ item }) => (
          <View>
            <Text>Customer Name: {item.customer.name}</Text>
            <Text>Staff Name: {item.staff.name}</Text>
            <Text>Service: {item.service.name}</Text>
            <Text>Price: ${item.service.price}</Text>
            <Text>Time: {item.gender}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default AppointmentList;
