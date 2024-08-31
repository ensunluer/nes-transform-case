import { useMemo } from 'react';
// third-party
import { ConfigProvider } from 'antd';
import { useQuery } from '@tanstack/react-query';
// components
import SelectComponent from './components';
import Loading from './components/Loading.tsx';
// style
import { GlobalStyle } from './style.tsx';
// utils
import { fetchData } from './utils';
// types
import { IUserItem, UserReturnType } from './types.ts';

function App() {

  const {
    isPending: usersPending,
    error: usersError,
    data: users,
  } = useQuery<UserReturnType>({
    queryKey: ['usersData'],
    queryFn: () => fetchData('https://jsonplaceholder.typicode.com/users'),
  });

  const memoizedMergedData = useMemo(() => {
    return users?.map((user: IUserItem) => ({
      id: user.id,
      name: user.name,
      username: user.username.toLowerCase(),
      image: `https://i.pravatar.cc/150?u=${user.id}`,
    })) || [];
  }, [users]);

  if (usersPending) return <Loading />;

  if (usersError) return 'An error has occurred: ' + usersError.message;

  return (
    <ConfigProvider theme={{ cssVar: true }}>
      <GlobalStyle />
      <SelectComponent users={memoizedMergedData} />
    </ConfigProvider>
  );
}

export default App;
