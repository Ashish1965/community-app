import { Card, CardContent, Typography } from '@mui/material';

const CommunityPosts = ({ posts }) => (
  posts.map(post => (
    <Card key={post.id} style={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{post.content}</Typography>
      </CardContent>
    </Card>
  ))
);

export default CommunityPosts;
