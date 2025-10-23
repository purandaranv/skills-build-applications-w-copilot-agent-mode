import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched activities data:', data);
        setActivities(data.results || data);
      });
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Activities</Card.Title>
        <Table striped bordered hover responsive>
          <thead className="table-primary">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={activity.id || idx}>
                <td>{activity.name || '-'}</td>
                <td>{activity.type || '-'}</td>
                <td>{activity.duration || '-'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary">Add Activity</Button>
      </Card.Body>
    </Card>
  );
};

export default Activities;
