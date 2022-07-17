import React from 'react';
import {useFetch} from '../../_shared/http-module/hooks/use-fetch';

interface Todo {
  id: string;
  title: string;
}

export const SystemGeneral: React.FC = () => {
  const {isLoading, data} = useFetch<Todo>({url: 'https://jsonplaceholder.typicode.com/todos/1', method: 'GET'});
  return (
    <div>
      <div>Testing http...</div>
      <div>{isLoading}</div>
      <div>{data?.title}</div>
    </div>
  );
};
