const mockAppointments = [
    {
      id: 1,
      customer: { id: 1, name: 'Mathew Haiden', gender: 'Male', number: '071142863' },
      staff: { id: 1, name: 'Paul' },
      service: { id: 1, name: 'Haircut', price: 200 },
      startTime: '12:00',
      endTime:'12:30',
      gender: 'Male',
      isCancel: false,
      date: '2024.03.08'
    },
    {
      id: 7,
      customer: { id: 7, name: 'Mathew Haiden', gender: 'Male' ,number: '071142863'},
      staff: { id: 7, name: 'Paul' },
      service: { id: 7, name: 'Haircut', price: 200 },
      startTime: '12:00',
      endTime:'12:30',
      gender: 'Male',
      isCancel: false,
      date: '2024.03.08'
    },
    {
      id: 6,
      customer: { id: 6, name: 'John Doe', gender: 'Male', number: '071142863' },
      staff: { id: 6, name: 'Alice' },
      service: { id: 6, name: 'Haircut', price: 200 },
      startTime: '13:00',
      endTime:'13:30',
      gender: 'Male',
      isCancel: false,
      date: '2024.03.08'
    },
    {
      id: 2,
      customer: { id: 2, name: 'Jane Smith', gender: 'Male' ,number: '071142863'},
      staff: { id: 2, name: 'Bob' },
      service: { id: 2, name: 'Massage', price: 300 },
      startTime: '10:00',
      endTime:'10:30',
      gender: 'Male',
      isCancel: false,
      date: '2024.03.08'
    },
    {
        id: 3,
        customer: { id: 3, name: 'Jane Smith', gender: 'Female', number: '071142863' },
        staff: { id: 3, name: 'Boba' },
        service: { id: 3, name: 'Massage', price: 300 },
        startTime: '10:00',
        endTime:'10:30',
        gender: 'Male',
        isCancel: false,
        date: '2024.03.08'
      },
      {
        id: 5,
        customer: { id: 5, name: 'John Doe', gender: 'Male', number: '071142863' },
        staff: { id: 5, name: 'Alices' },
        service: { id: 5, name: 'Haircut', price: 200 },
        startTime: '12:00',
        endTime:'12:30',
        gender: 'Male',
        isCancel: false,
        date: '2024.03.08'
      },
    // Add more mock appointments as needed
  ];

  export default mockAppointments;