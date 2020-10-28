import React from 'react';
import TextArea from 'react-autosize-textarea';

// CUSTOM IMPORTS
import api from '~/services/api';
import PostCell from '~/components/Cells/PostCells';
import { Container, Card, PostList, Input } from './styles';

function Posts() {
  // STATE
  const [posts, setPosts] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // FUNCTIONS
  React.useEffect(() => {
    const fetchPosts = async () => {
      await api.server.get('/posts').then(response => {
        setPosts(response.data);
        setIsLoaded(true);
      });
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <Card>
        <TextArea />
      </Card>
      {isLoaded && (
        <PostList>
          {posts.map(post => (
            <PostCell post={post} />
          ))}
        </PostList>
      )}
    </Container>
  );
}

export default Posts;
