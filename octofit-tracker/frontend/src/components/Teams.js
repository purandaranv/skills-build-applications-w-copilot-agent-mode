import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API endpoint:', endpoint);
        console.log('Fetched teams data:', data);
        setTeams(data.results || data);
      });
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Teams</Card.Title>
        <Table striped bordered hover responsive>
          <thead className="table-info">
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{team.name || '-'}</td>
                <td>{team.members || '-'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success">Create Team</Button>
      </Card.Body>
    </Card>
  );
};

export default Teams;
