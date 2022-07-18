import React, {useEffect} from 'react';
import {useFetch} from '../../_shared/modules/http/hooks/use-fetch';

interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}

export const SystemGeneral: React.FC = () => {
  // const {isLoading, data} = useFetch<Post>({url: 'https://jsonplaceholder.typicode.com/posts/1', method: 'GET'})();
  const {operation: createPost} = useFetch<Post>();
  const s = () => {
    createPost({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      headers: {'Content-type': 'application/json; charset=UTF-8'},
      body: {
        title: 'post title',
        body: 'post description',
        userId: 'userID',
      },
    });
    console.log('Post created');
  };
  useEffect(() => {

  }, []);
  return (
    <div>
      <div>Testing http...</div>
      <div><button onClick={s}>Create a new post</button></div>
    </div>
  );
};
