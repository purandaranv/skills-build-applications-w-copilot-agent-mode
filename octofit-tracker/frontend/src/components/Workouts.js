import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts API endpoint:', endpoint);
        console.log('Fetched workouts data:', data);
        setWorkouts(data.results || data);
      });
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Workouts</Card.Title>
        <Table striped bordered hover responsive>
          <thead className="table-danger">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <td>{workout.name || '-'}</td>
                <td>{workout.type || '-'}</td>
                <td>{workout.duration || '-'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="danger">Add Workout</Button>
      </Card.Body>
    </Card>
  );
};

export default Workouts;
