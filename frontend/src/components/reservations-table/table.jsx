import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function ReservationTable() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/list-of-reservations/')
      .then(response => setReservations(response.data))
      .catch(error => console.error(error));
  }, []);

  console.log(reservations)
  return (
<Table striped bordered hover className="reservation-table my-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Number of People</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => (
          <tr key={reservation.id}>
            <td>{reservation.id}</td>
            <td>{reservation.name}</td>
            <td>{reservation.email}</td>
            <td>{reservation.phone_number}</td>
            <td>{reservation.date}</td>
            <td>{reservation.time}</td>
            <td>{reservation.number_of_people}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ReservationTable;