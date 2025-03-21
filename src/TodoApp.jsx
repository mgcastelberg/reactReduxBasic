import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    // const { data: todos, isLoading } = useGetTodosQuery(); //Hace peticion y almacena en cache
    const { data: todo, isLoading } = useGetTodoByIdQuery(todoId); //Hace peticion y almacena en cache
    // console.log(todo);

    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const prevTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1 );
    }

  return (
    <>
        <h1>TodoApp - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'true' : 'false' }</h4>

        <pre>{ JSON.stringify( todo, null, 2 )}</pre>

        {/* <ul>
            {
                todos?.map( todo => (
                    <li style={{ textTransform: 'capitalize', textAlign: 'left' }} key={ todo.id }>
                        { todo.completed ? '✅' : '❌' } - { todo.title }</li>
                ))
            }
        </ul> */}

        <button onClick={ () => prevTodo() }>
            Prev Todo
        </button>
        <button onClick={ () => nextTodo() } style={{ marginLeft: '10px' }}>
            Next Todo
        </button>
    </>
  )
}
