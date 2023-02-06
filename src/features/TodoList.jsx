import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../recoil_state'
import PostLists from './PostLists'
import TodoAdd from './TodoAdd'
const TodoList = () => {
    const todoList = useRecoilValue(todoListState)
  return (
    <div>
        <TodoAdd/>
        {todoList.map(item => {     
            return (<PostLists key={item.id} item={item}/>)
        })}
    </div>
  )
}

export default TodoList