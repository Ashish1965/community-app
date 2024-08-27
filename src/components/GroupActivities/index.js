import { Card, CardContent, Typography } from '@mui/material';

const GroupActivities = ({ activities }) => (
  activities.map(activity => (
    <Card key={activity.id} style={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h6">{activity.title}</Typography>
        <Typography variant="body2">{activity.details}</Typography>
      </CardContent>
    </Card>
  ))
);

export default GroupActivities;
