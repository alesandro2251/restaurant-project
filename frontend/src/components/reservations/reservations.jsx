import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./reservations.css";
import axios from "axios";

const Reservation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("11:00");
  const [number_of_people, setPeople] = useState("");

  const handleSubmit = async () => {
    try {
      const formField = new FormData();

      formField.append("name", name);
      formField.append("email", email);
      formField.append("phone_number", phone_number);
      formField.append("date", date);
      formField.append("time", time);
      formField.append("number_of_people", number_of_people);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/",
        formField
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="mt-5 contain my-3" id="reservation">
      <h2 className="text-center mb-5 reservation-title">Make a Reservation</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ fontSize: "1.2rem" }}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ fontSize: "1.2rem" }}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formNumber">
              <Form.Label className="text-white">Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your number"
                value={phone_number}
                onChange={(e) => setNumber(e.target.value)}
                style={{ fontSize: "1.2rem" }}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formDate">
              <Form.Label className="text-white">Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ fontSize: "1.2rem" }}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formTime">
              <Form.Label className="text-white">Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Choose time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ fontSize: "1.2rem" }}
                min="11:00"
                max="22:00"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formPeople">
              <Form.Label className="text-white">Number of People</Form.Label>
              <Form.Control
                type="number"
                value={number_of_people}
                placeholder="Number of people"
                onChange={(e) => setPeople(e.target.value)}
                style={{ fontSize: "1.2rem" }}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button
          variant="secondary"
          type="submit"
          className="mx-auto d-block mt-3 custom-button"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Reservation;
