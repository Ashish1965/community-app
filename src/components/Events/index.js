import { Card, CardContent, Typography } from '@mui/material';

const Events = ({ events }) => (
  events.map(event => (
    <Card key={event.id} style={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h6">{event.name}</Typography>
        <Typography variant="body2">{event.date}</Typography>
      </CardContent>
    </Card>
  ))
);

export default Events;
