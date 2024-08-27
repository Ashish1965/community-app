import { Container, Typography, Grid } from '@mui/material';
import CommunityPosts from '../components/CommunityPosts';
import GroupActivities from '../components/GroupActivities';
import Events from '../components/Events';

const dummyPosts = [
  { id: 1, title: 'Post 1', content: 'This is the first post' },
  { id: 2, title: 'Post 2', content: 'This is the second post' },
];

const dummyActivities = [
  { id: 1, title: 'Activity 1', details: 'This is the first activity' },
  { id: 2, title: 'Activity 2', details: 'This is the second activity' },
];

const dummyEvents = [
  { id: 1, name: 'Event 1', date: '2023-09-15' },
  { id: 2, name: 'Event 2', date: '2023-09-25' },
];

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Community App
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Community Posts</Typography>
          <CommunityPosts posts={dummyPosts} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Group Activities</Typography>
          <GroupActivities activities={dummyActivities} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Events</Typography>
          <Events events={dummyEvents} />
        </Grid>
      </Grid>
    </Container>
  );
}
