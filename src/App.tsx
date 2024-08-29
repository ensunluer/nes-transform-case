// third-party
import { useQuery } from '@tanstack/react-query';
// types
import { IPostItem, PostReturnType } from './types.ts';
// styles
import './App.css';

function App() {

  const { isPending: postIsPending, error: postsError, data: posts } = useQuery<PostReturnType>({
    queryKey: ['postsData'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res: Response) =>
        res.json(),
      ),
  });

  if (postIsPending) return 'Loading...';

  if (postsError) return 'An error has occurred: ' + postsError.message;

  return (
    <>
      {posts?.map((post: IPostItem) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
