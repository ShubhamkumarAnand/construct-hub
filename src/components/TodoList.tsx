'use client';

import { trpc } from '@/app/_trpc/client';

const TodoList = () => {
  const todo = trpc.sayHello.useQuery();

  return (
    <div>
      <p>TodoList : {JSON.stringify(todo.data)}</p>
    </div>
  );
};

export default TodoList;
