import React, { useState, useCallback, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default styling for the calendar
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #f8f9fa; /* Page background color */
`;

const FormContainer = styled.div`
  margin-right: 20px;
`;

const CalendarContainer = styled.div`
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const DateInput = styled(Input).attrs({ type: 'date' })``;

const TimeInput = styled(Input).attrs({ type: 'time' })``;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AppointmentList = styled.div`
  margin-top: 20px;
`;

const AppointmentItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Popup = styled.div`
  position: absolute;
  background-color: red; /* Popup background color */
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: ${(props) => (props.show ? 'block' : 'none')};
  top: ${(props) => props.position.y}px;
  left: ${(props) => props.position.x}px;
  max-width: 300px;
  border-radius: 5px;
`;

const PopupContent = styled.div`
  font-size: 16px;
`;

const AppointmentManagement = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [popup, setPopup] = useState({ show: false, content: '', position: { x: 0, y: 0 } });
  const popupRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', date: '', time: '', notes: '' });

  // Handle form input changes
  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newAppointment = { id: Date.now(), ...formData };
    setAppointments([...appointments, newAppointment]);
    setFormData({ name: '', date: '', time: '', notes: '' });
  };

  // Check if there are appointments on a specific date
  const hasAppointments = (date) => {
    return appointments.filter((appointment) =>
      new Date(appointment.date).toDateString() === date.toDateString()
    );
  };

  // Show popup with appointment details
  const handleMouseClick = useCallback((event, date) => {
    const appointmentsOnDate = hasAppointments(date);
    if (appointmentsOnDate.length > 0) {
      const content = appointmentsOnDate.map((app) => (
        <PopupContent key={app.id}>
          <strong>{app.name}</strong>
          <p>{app.time}</p>
          <p>{app.notes}</p>
          <ButtonGroup>
            <Button onClick={() => handleEdit(app.id)}>Edit</Button>
            <Button onClick={() => handleDelete(app.id)}>Delete</Button>
          </ButtonGroup>
        </PopupContent>
      ));

      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left + 10; // Adjust for positioning within the calendar
      const y = event.clientY - rect.top + 10; // Adjust for positioning within the calendar

      setPopup({
        show: true,
        content,
        position: { x, y }
      });
    }
  }, [appointments]);

  // Handle editing an appointment
  const handleEdit = (id) => {
    const appointment = appointments.find((app) => app.id === id);
    if (appointment) {
      console.log('Edit Appointment:', appointment);
      // Implement edit logic here (e.g., show a modal or form to edit the appointment)
    }
  };

  // Handle deleting an appointment
  const handleDelete = (id) => {
    const updatedAppointments = appointments.filter((app) => app.id !== id);
    setAppointments(updatedAppointments);
    setPopup({ show: false, content: '', position: { x: 0, y: 0 } });
  };

  // Close popup when clicking outside of it
  const handleClickOutside = useCallback((event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopup({ show: false, content: '', position: { x: 0, y: 0 } });
    }
  }, []);

  // Add event listener for clicks outside the popup
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  // Add a class to dates with appointments
  const tileClassName = ({ date, view }) => {
    if (view === 'month' && hasAppointments(date).length > 0) {
      return 'highlight';
    }
    return null;
  };

  return (
    <Container>
      <FormContainer>
        <Title>Appointment Management</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Client Name:</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleFormChange} placeholder="Client Name" required />
          <Label htmlFor="date">Date:</Label>
          <DateInput id="date" name="date" value={formData.date} onChange={handleFormChange} required />
          <Label htmlFor="time">Time:</Label>
          <TimeInput id="time" name="time" value={formData.time} onChange={handleFormChange} required />
          <Label htmlFor="notes">Notes:</Label>
          <TextArea id="notes" name="notes" value={formData.notes} onChange={handleFormChange} placeholder="Additional Notes" />
          <Button type="submit">Add Appointment</Button>
        </Form>
        <AppointmentList>
          {appointments.map((appointment) => (
            <AppointmentItem key={appointment.id}>
              <h3>{appointment.name}</h3>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Notes:</strong> {appointment.notes}</p>
              <ButtonGroup>
                <Button onClick={() => handleEdit(appointment.id)}>Edit</Button>
                <Button onClick={() => handleDelete(appointment.id)}>Delete</Button>
              </ButtonGroup>
            </AppointmentItem>
          ))}
        </AppointmentList>
      </FormContainer>
      <CalendarContainer>
        <Title>Appointments</Title>
        <Calendar
          value={date}
          onChange={setDate}
          tileClassName={tileClassName}
          tileContent={({ date, view }) =>
            view === 'month' && hasAppointments(date) ? (
              <div className="appointment-marker"></div>
            ) : null
          }
          onClickDay={(date, event) => handleMouseClick(event, date)}
        />
        <Popup ref={popupRef} show={popup.show} position={popup.position}>
          {popup.content}
        </Popup>
      </CalendarContainer>
    </Container>
  );
};

export default AppointmentManagement;
