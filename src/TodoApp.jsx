import React from 'react'
import { useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {

    const { data: todos, isLoading } = useGetTodosQuery(); //Hace peticion y almacena en cache
    // console.log(todo);
  return (
    <>
        <h1>TodoApp - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'true' : 'false' }</h4>

        <pre>...</pre>

        <ul>
            {
                todos?.map( todo => (
                    <li style={{ textTransform: 'capitalize', textAlign: 'left' }} key={ todo.id }>
                        { todo.completed ? '✅' : '❌' } - { todo.title }</li>
                ))
            }
        </ul>

        <button>
            Next Todo
        </button>
    </>
  )
}
