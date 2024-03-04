const mockAppointments = [
    {
      id: 1,
      customer: { id: 1, name: 'John Doe' },
      staff: { id: 1, name: 'Alice' },
      service: { id: 1, name: 'Haircut', price: 200 },
      startTime: '12:00',
      endTime:'12:30',
      gender: 'Male'
    },
    {
        id: 4,
        customer: { id: 4, name: 'John Doe' },
        staff: { id: 4, name: 'Alice' },
        service: { id: 4, name: 'Haircut', price: 200 },
        startTime: '12:00',
        endTime:'12:30',
        gender: 'Male'
      },
    {
      id: 2,
      customer: { id: 2, name: 'Jane Smith' },
      staff: { id: 2, name: 'Bob' },
      service: { id: 2, name: 'Massage', price: 300 },
      startTime: '10:00',
      endTime:'10:30',
      gender: 'Male'
    },
    {
        id: 3,
        customer: { id: 3, name: 'Jane Smith' },
        staff: { id: 3, name: 'Bob' },
        service: { id: 3, name: 'Massage', price: 300 },
        startTime: '10:00',
        endTime:'10:30',
        gender: 'Male'
      },
      {
        id: 5,
        customer: { id: 5, name: 'John Doe' },
        staff: { id: 5, name: 'Alice' },
        service: { id: 5, name: 'Haircut', price: 200 },
        startTime: '12:00',
        endTime:'12:30',
        gender: 'Male'
      },
    // Add more mock appointments as needed
  ];

  export default mockAppointments;